## iOS setup guide // Use Mac OS With XCODE 10.1/Simulator/React Native v.0.59
0. open terminal
1. cd tannara-assignment
2. run = `npm install`
3. run= `react-native link`
4. run server local get mock data = `node run-server.js`
5. open new window terminal
6. cd tannara-assignment
7. run = `react-native run-ios`

## ANDROID setup guide // React Native v.0.59 // Setup android sdk.. bla... simulator
0. open terminal
1. cd tannara-assignment
2. run = `npm install`
4. run= `react-native link`
5. run server local get mock data = `node run-server.js`
6. open new window terminal
7. cd tannara-assignment
8. run = `react-native run-android`

9. If Show Error Page Please Chage my IP File App.js Line:35
    const response = await fetch('http://10.0.2.2:7777/data'); // default AVD to IP Address example 192.168.1.xxx await fetch('http://192.168.1.xxx:7777/data');

Link setup React-Native https://facebook.github.io/react-native/docs/getting-started

## Unit-Test
0. open terminal
1. cd tannara-assignment
2. run = `npm test`

## Thank you ... Tannara Ervithaysuporn



