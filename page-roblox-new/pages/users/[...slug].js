import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function getServerSideProps({ params, res }) {
  const slug = params.slug[0]; // catch-all slug
  const q = query(collection(db, 'urls'), where('key', '==', slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    res.statusCode = 404;
    return { props: {} };
  }

  const urlData = snapshot.docs[0].data();
  res.writeHead(302, { Location: urlData.originalUrl });
  res.end();

  return { props: {} };
}

export default function RedirectPage() {
  return null;
}
