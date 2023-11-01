import Image from 'next/image'
import Header from '../components/template/Header';
import EventListing from '../components/template/EventListing';

type ResponseData = {
  name: string
}

async function getEventData() {
  const res = await fetch(process.env.URL + '/api/hello', { next: { revalidate: 360000 } });
  const eventData = await res.json();

  return eventData;
}

//export async function getStaticProps() {
  //console.log('HELLO');

//  const response = await fetch("/api/hello");
  // console.log('HELLO');

  // if (response.status !== 200) {
  //   console.error(response);
  //   throw new Error('Failed to contact Hello API');
  // }

  // const eventData = await response.json();
  // console.log('eventData', eventData);

//  const eventData = null;

//  return {
  //  props: {
    //  eventData
    //},
    //revalidate: 3600000
  //}
//}

export default async function Home() {
  const eventData = await getEventData();
  console.log('hello, 6', eventData);
  return (
    <>
      <h1>INDEX</h1>
      <Header />
      <EventListing />
      {eventData.name}
    </>
  )
}
