console.log(
  `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`,
);

const pingTest = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

pingTest();
