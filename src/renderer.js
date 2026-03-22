console.log(
  `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`,
);

const pingTest = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

pingTest();
