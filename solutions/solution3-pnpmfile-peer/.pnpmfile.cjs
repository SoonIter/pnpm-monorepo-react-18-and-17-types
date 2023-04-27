module.exports = {
  hooks: {
    readPackage,
  },
};

function readPackage(packageJson, context) {
  if (packageJson.name === '@types/react-dom') {
    packageJson.peerDependencies = {
      ...(packageJson.peerDependencies ?? {}),
      '@types/react': packageJson.version.includes('17')
        ? '^17.0.0'
        : '^18.0.0',
    };
  }
  return packageJson;
}
