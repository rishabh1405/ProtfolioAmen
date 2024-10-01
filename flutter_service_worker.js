'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "23033a4fd5073ad34dd6982368e69c94",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "ec898092e2b01b093bf66751730a9aed",
"/": "ec898092e2b01b093bf66751730a9aed",
"main.dart.js": "aab626f2ec23591d22617767173dcfe3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "4f3a10a1fc50ee7f5c7370149e4a568e",
".git/objects/95/f3e03ef571dff1948885c70675102f5f5083e8": "ae8632cffa382551ec72061a4ff856bd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/58/fa175b563ef12256e211fc0e9a400b2a426ef5": "3adf5941947098575b50fb17aa3160d4",
".git/objects/0e/1eb513be64c1f4fa4f05963f269b347882b214": "7f7c190ab18dda3bbf10d378a03ca151",
".git/objects/33/2d3a2033e1e4ef6b34d9ee137b66e1888abd28": "439b6a2e48b3a62e98ea2445e35016b9",
".git/objects/b2/c393364daf52349cd48229bc361a4ee93259b2": "43930c81962c770b830cbe554b8cc9f0",
".git/objects/d9/a4935d6d7d6a06cb70be7b0bc02f4916448c3a": "dfa9e286af13051060b5c0029db9cfb0",
".git/objects/bb/e5069df463b383e4db3e1a1d94bb0f7bb6e11d": "bb3c2380d3758da33876434025ecb947",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/082130a1a2c7a80eaadbec2b21e6f5cf7a2d49": "2646c5e5124e3f33bd35a17c846bccc3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/70a9c75c505d3ae0149969e42638f7bf72263e": "4bc582c6eea86aca2daf0cf02ecb0ac1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9cf09f7cf72f78e2fa1c727e37572d7577bbf9": "6d7854a070d5da0121eeb3546f3adb2e",
".git/objects/d8/368e5bdf26cd8f81b2d9578aa4caf4d7764b95": "873485d0d8a3ef5ca15408dff0041011",
".git/objects/ab/68508d14a22d6edd000542bd92275c32a74e5f": "1da03b43a34f5b9480dba77aecfa86c3",
".git/objects/ab/8517cc21255034ddb490e402d5fc97f885791b": "fba8e63d3703a460930c996df341e13c",
".git/objects/f3/babdceae475a44da0af1a1c7fd808cc44a6602": "dc747ebd5607e7d89f2ffdeb85440dec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/bf42b0c9b98ea1d94b6422bd8d001b417fb564": "885e96a723cbb6ab041e725b87ad8527",
".git/objects/ec/700fc07419806421a2a83a55c89f39d6df2b76": "5a999a32eb573d6ef88f1e7aa1db5eac",
".git/objects/4e/3bf0d2b6c951ef2b931b15517bfdb8c457f5f5": "ebc7c1c4c7de24d864c5960ddff9296f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/73/32aef43ea10de33fdd2a47513ef1a7d4ffa47b": "ae43f5ea2fee4304f2fb2f1dfa945e7f",
".git/objects/1a/aeb04c8829593db20150b8b91482e439772bbf": "56c8e1c4d3542bfe1aa2ebb10ec4cd95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f39fb60bf212122facc6e2253dbf468b83806b": "3636160e0294795269e840551c2d87e6",
".git/objects/26/de33f5b810319f74c60c45574ba6ccb4449881": "67df641e7908eb68d9d9eaebc1647752",
".git/objects/26/eb2c00709f0a96ffb3e29b92a236e4b349a1ca": "251ff75c517ebf6bad39b9b52f5e5f3e",
".git/objects/75/b52484ea471f882c29e02693b4f02dba175b5e": "abde8da409a47de8393ecd2e34a93779",
".git/objects/81/cd78698098ae8c42d750eff8c848a1a7445805": "672afc0e42a9c403a9373bd4c629d1d5",
".git/objects/81/4346a703f2e100fdfde46bc2f95725909e84fb": "1f63fb6c7fe9b1b3a40687cb5ff7ace2",
".git/objects/86/7b76d97819fcbf624b155d507414025073aa58": "97a897de5354657cffea28fd2315b933",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/9d59496781a2ac847df49da3025ae5b0c29b86": "1aff822020e9ec638467d914e205ecfb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/07e15c3ae09c0e97cc716cf329063a95f5d168": "9827236014351ca337d41d4a8597d7bc",
".git/objects/5d/cacbbed851b4baab2de453719cda4a2c40af56": "951044d08bb32f12f8902a5e9afdfb94",
".git/objects/31/c412ce5ca022320c7cf8952302085e8a17234b": "06598782cd06e173c723030427ba0b82",
".git/objects/65/498ee374c89a7c0fb9b1b12d92fcf750fc65cb": "2f130cf192369dfde379d0fdf4471b5d",
".git/objects/65/5df7fc691f5e57fc46d5058a0414646de65798": "400f29c4ca1895a71a02f6a61be539db",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/6507e647e387d87a07068e1b728f85254d69c3": "280bda7890c733812af5097c0b410773",
".git/objects/54/e6352f8cb85b6778a8ade2fe2d182a060104b5": "f7a2a68d9b0779e0c26da5e5de193dee",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/8cff23ce4a46506dae8f5881063a40fcbfd2a0": "8916d3f05b2c07f8656c24d5eb1fa558",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/c7f3f50fc82d4d7d61541c2c2c03e7a8a666ce": "e81c5ef28a596293be25114efb186f3e",
".git/objects/5e/39ae97c2a65713da2610f5077b5a44565746f5": "3cd30fb6a1ece47eab83c79023f99170",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/21206ea2a675fcaf42d0f230b81a35d36a1296": "75c219683aa673282282b39e2098b0b8",
".git/objects/39/8af9b3c3e7a6a9561b5158c66e53085407a7cd": "99705e690c94e27b0c6f025ae8d5de7d",
".git/objects/55/0ba845c990b9c2ee734830086af2e89cf8b05f": "7b812f6a289cd903c83ea239d67d95b4",
".git/objects/0a/4dfd05dc790d7840f8f0be257f5123bd50ad28": "991812a9e50b3852385eda2633354f16",
".git/objects/64/b254929249e79f7c2472924629a6fd351d0686": "6ae607323f44beec0173e3abb483348a",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/d81b7932db2a515c1e909fdba051c705ddd0af": "3fb0767a11796afd9f0612e1f450399e",
".git/objects/a0/0e5fa9cab0e270fb3bc857f68250b820c7f145": "3d51eaf4d56616f1acddde2e5036dbff",
".git/objects/a7/e02843a764de221b3d92231f0d6a268b6a8824": "e53be00dbb9577e56699785e22739838",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d104dc2f48760ec000f857c52e0228570f2b83": "769f0560c4e3f30b191e567a015dc4f6",
".git/objects/b0/4ed7c359413f8d803e0181f8f39b02b69db0e0": "e0e5af4e66f2cf7225afab562366a2f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/82b44e18cec6709a9f93095920e1aac82fe3ec": "ef4dd42a034a3d631013def2e2182407",
".git/objects/ef/3165bc2c4ce9491c70c316b3582127917a47bf": "d952a750820c784b529aa0274f91d548",
".git/objects/cd/8e0490e03db6f850c6acad479a0a2339390e00": "108139862bd7a59681d196ba5b6c270c",
".git/objects/e6/4db796d1fc0d6f05566dc394fc8640804fcf06": "003240fda8f64736521fc3bb086528b9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/38298b7187708f96d9e6014bc01fc9ad782171": "150b362d8c6021bc3be3fe13d7cd0b12",
".git/objects/cb/7d12a8e9d44453764948f7dddffddb82e30ab5": "95b60543d1979ace8c2005aa16d205f4",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/1be86f4fd71d3b24d51a8652eebd3da4044812": "cfcd9c032e70468ac44574a2c84808dd",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/c859460c6474ccd14570ae02c4275f53828bbb": "952027297c3801ebe4da7d7ff5a83c10",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "029616264d4d365db8ccb9cdadd43eb3",
".git/logs/refs/heads/main": "029616264d4d365db8ccb9cdadd43eb3",
".git/logs/refs/remotes/origin/main": "5c367a3c685a0321dcf2eb12c9672e75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "81d729e9821f6999fcf0fbed84f6a227",
".git/refs/remotes/origin/main": "81d729e9821f6999fcf0fbed84f6a227",
".git/index": "ca015e40051dba82e079c290c8009b95",
".git/COMMIT_EDITMSG": "04b8b903606bff43739cdad0f3493023",
"assets/AssetManifest.json": "d5282a844180045ab9693f6733bccbe2",
"assets/NOTICES": "a001cc987c9213df47f5ea30decb61c8",
"assets/FontManifest.json": "4aed9c94721ce24947de7098fd08cb0b",
"assets/AssetManifest.bin.json": "06e5640a915c4e0f8e44f2aeabb0b087",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5ec41e5ad167a5c3be63da89f3537330",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/50euro.svg": "54643661f991b087c57a5a401ccd98b7",
"assets/assets/images/circle.svg": "d15576e7bada7bfce4f686ee670ffa5c",
"assets/assets/images/leow.png": "b5300820d6ced1ff3b99b030378f6a0c",
"assets/assets/images/digital.svg": "8fe6de449eeff18685e9ffec77677e0d",
"assets/assets/images/bgi.png": "1da80723a9472a10b8a44754bad0be95",
"assets/assets/images/Group.svg": "41c403e28b1d8e790b18d88d8de99a35",
"assets/assets/images/100euro.svg": "7552545b68f7c5a176c8dd636d48d132",
"assets/assets/images/Lines.svg": "1c876ba1fcc714eaa04e6ce2b18ca85b",
"assets/assets/images/Vector-7.svg": "0fb8f934e0024c045c7624db8ca0917a",
"assets/assets/images/Vector-6.svg": "b914b76847857ceb6fbe0df4bea74eb6",
"assets/assets/images/bg.svg": "67be11fbb3c8b00f4eca437c786aac2c",
"assets/assets/images/allImage.png": "faab0b9f3cc2ab3b80111db2e7f4b13b",
"assets/assets/images/start.svg": "9a4f3e936b3b120272010de2247f0bcb",
"assets/assets/images/Vector-8.svg": "0d40147abae53f197cdb1981d45405ca",
"assets/assets/images/diamond.svg": "29c11f7911323e596f8b6f697cf59acb",
"assets/assets/images/10euro.svg": "50166606ad47728801f54f60c9f43bbd",
"assets/assets/images/zigzac.svg": "47d101c6c3082c26b6d75f4db16f1988",
"assets/assets/images/yovven.png": "833a04f2b9f2c352b72d267038afffc4",
"assets/assets/images/location.svg": "6e405e4e17f5f430075a77735e6cfe7a",
"assets/assets/images/FrameGlobe.svg": "9f815ed92babebb57962296a1a507579",
"assets/assets/images/globe.svg": "485ecf623117d50611a5fba52025a49a",
"assets/assets/images/upArrow.svg": "7ca82c080cd90f13e89bd32d781c7f79",
"assets/assets/images/image1.png": "ec5f73cd00d59ffe4f7aeb53c24e9665",
"assets/assets/images/image2.png": "2273dc7928990b78bcca87608ebe6bb8",
"assets/assets/images/image.png": "dd4ccb6494440515e42eb6d0cc8f590c",
"assets/assets/images/image3.png": "c62cca415310a47b3c2231cf9daf05ad",
"assets/assets/db/form_data.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
