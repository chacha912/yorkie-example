import yorkie from 'yorkie-js-sdk';

async function main() {
  const client = new yorkie.Client('https://api.yorkie.dev', {
    apiKey: 'ce90b1juioqol8ent2u0',
  });
  await client.activate();

  const doc = new yorkie.Document('my-first-document');
  await client.attach(doc);

  client.subscribe((event) => {
    if (event.type === 'peers-changed') {
      const peers = event.value[doc.getKey()];
      document.getElementById('peersCount').innerHTML = Object.entries(peers).length;
    }
  });
}
main();
