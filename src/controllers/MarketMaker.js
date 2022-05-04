import React, { useState } from 'react';

function MarketMaker(props) {
    const [data, setdata] = useState(
        [
            {
                "_id": "627225c778135443dc8d7da3",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1648653313,
                "swapTxid": "0x4f0ab2a0ae2e1fa56be4f551985a1179de7224b69593534bfef2f33053a52fc9",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647943671,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            },
            {
                "_id": "627225c878135443dc8d7da9",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1648707641,
                "swapTxid": "0xcd7eb2ef4ee6e49325df679f71d467430969229b8c79f0862555c5181e26340c",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647944528,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            },
            {
                "_id": "627225c978135443dc8d7daf",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1648714149,
                "swapTxid": "0x521b3947334dd815cbffe976786c821722a013dade02d7377669738db18aac2c",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647945369,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            },
            {
                "_id": "627225ca78135443dc8d7db5",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1649300349,
                "swapTxid": "0xb3976d07fc2c167661174783dc56c7dfd2a165bd4444d9b34095cb46e010acf7",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647946245,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            },
            {
                "_id": "627225cb78135443dc8d7db9",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1649300370,
                "swapTxid": "0x9f8a3bb99b99e7de3f29c960a16bd4f1a8fdbd82b11ec72c97c3bdc9a214dc64",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647947075,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            },
            {
                "_id": "627225cb78135443dc8d7dbd",
                "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                "swapTime": 1649299962,
                "swapTxid": "0x2ddb24bc8d1a5bd49c2394de2308495cddf2ca3b4a0faa1c018f9d13a8a02b79",
                "address": "0x517e608e63fc547110f11543411f94a596db5579",
                "type": "PARENT",
                "createAt": 1651647947887,
                "children": [
                    {
                        "_id": "627225c778135443dc8d7da4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648833252,
                        "swapTxid": "0x3db39c2c3fafb0d9224e1cd9caed44e585d9fd5da61841791a142a219444b8bb",
                        "address": "0x3e4cfa3da8e860aec6d21f935f4771eaab97a8ad",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c778135443dc8d7da5",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647943671,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7daa",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dab",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dac",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dad",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c878135443dc8d7dae",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647944528,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648989423,
                        "swapTxid": "0xb28892dc65016ccde2f30047f4f113845e0a4b51b30d5c2d445153b1a838ec96",
                        "address": "0xb459c464a85f6fcedae3e952983b7637a099eb39",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db1",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db2",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648834313,
                        "swapTxid": "0x2fb1a7536920ebe74f1849673bf0ad4e6b95dc136c49723dca88cd31f53ff068",
                        "address": "0x64b31cf25fca8c69b66446e84bb6e442ba1eac0f",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db3",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225c978135443dc8d7db4",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1649993210,
                        "swapTxid": "0x691b4c4f8b14bb6656b60f2ffcc1533ca6dc5abd868bf5af495050c57d077cb3",
                        "address": "0xb6a7c5d9b68f81758ffe072515a6029a7bc5c48d",
                        "type": "CHILD",
                        "createAt": 1651647945369,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db6",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db7",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225ca78135443dc8d7db8",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647946245,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dba",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbb",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbc",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947075,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbe",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648820237,
                        "swapTxid": "0x221c49bfeb1b5c9588e97599589f3602cc94f484679364a51bd53f727fde2058",
                        "address": "0xd0d570b27b3ed0da734745fdcac417041af130a9",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dbf",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648825924,
                        "swapTxid": "0xcf072fea618e85c2f6b8d64f1061f904e0c335098bb585c64be9a8712bb1e13c",
                        "address": "0xd5da08e8bb01e831f64496c26b9e8ccdf2d30860",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    },
                    {
                        "_id": "627225cb78135443dc8d7dc0",
                        "token": "0xe7af3fcc9cb79243f76947402117d98918bd88ea",
                        "swapTime": 1648867246,
                        "swapTxid": "0xbdfee676eff1560191008b04024a0febfb7b8a0a5dbbf6ef1f78baf01e645f65",
                        "address": "0xb4f67adc270fd6a89776ff0601316930dc4d9f52",
                        "type": "CHILD",
                        "createAt": 1651647947887,
                        "parent": "0x517e608e63fc547110f11543411f94a596db5579"
                    }
                ]
            }
        ]
    )

    const onToggleTable = (index) => {
        let detail = data
        detail[index].showDetail = !detail[index].showDetail
        setdata([...detail])
    }

    const renderChildTable = (value, index) => {
        return (
            <div className='child-table'>
                <div className='child'>
                    <p>{value.address}</p>
                </div>

                <div className='child'>
                    <p>{value.swapTime}</p>
                </div>

                <div className='child'>
                    <p>{value.swapTxid}</p>
                </div>
            </div>
        )
    }

    const renderTable = (value, index) => {
        var children = value.children
        return (
            <div>
                <div className='child-table' onClick={() => onToggleTable(index)}>
                    <div className='child'>
                        <p>{value.address}</p>
                    </div>

                    <div className='child'>
                        <p>{value.swapTime}</p>
                    </div>

                    <div className='child'>
                        <p>{value.swapTxid}</p>
                    </div>
                </div>

                {value.showDetail && <div className='child-detail'>
                    {children.length > 0 && children.map((valuee, indexx) => {
                        return renderChildTable(valuee, indexx)
                    })}
                </div>}
            </div>
        )
    }
    return (
        <div id="market-maker">
            <div className="container">
                <div className="wapper-table">
                    <div className='title'>
                        <div>
                            <p>Address</p>
                        </div>
                        <div>
                            <p>Swap Time</p>
                        </div>
                        <div>
                            <p>Swap Txid</p>
                        </div>
                    </div>
                    <div>
                        {data.map((value, index) => {
                            return renderTable(value, index)
                        })}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default MarketMaker;