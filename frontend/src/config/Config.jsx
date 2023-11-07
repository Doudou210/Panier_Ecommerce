// module.exports = {
//     // ...autres configurations...
//     resolve: {
//       fallback: {
//         fs: false, // Ajouter un polyfill pour 'fs', ou 'browserify-fs' si nécessaire
//         http: require.resolve('stream-http'),
//         zlib: require.resolve('browserify-zlib'),
//         querystring: require.resolve('querystring-es3'),
//         path: require.resolve('path-browserify'),
//         url: require.resolve('url/'),
//         util: require.resolve('util/'),
//         stream: require.resolve('stream-browserify'),
//         crypto: require.resolve('crypto-browserify'),
//         buffer: require.resolve('buffer/'),
//       },
//     },
//   };