// ===============================|  RSR  |===============================
//		Version: 1.1.5
//		Build Date: 20-April-21
//		Author: Kuma @ hbanz
//		Website: hbanz.org/realsoccer
//		* Real Soccer Revolution (RSR)
//      Changelog:
//		1.0 Official Release
//		1.1 Powershot mode added with toggle (credit to Winky)
//           
// =========================================================================

// =========================================================================
// Usefull Links
// ------------------------------------------------
// https://www.haxball.com/headless
// https://github.com/haxball/haxball-issues/wiki/Headless-Host
// https://www.haxball.com/headlesstoken
// https://www.haxball.com/playerauth
// =========================================================================
//else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
//	const n = Math.abs(teamR.length - teamB.length);

//Real Soccer Variables
var throwTimeOut = 420; // 7 seconds (var is in game ticks)
var gkTimeOut = 600; // 10 seconds (var is in game ticks)
var ckTimeOut = 600; // 10 seconds (var is in game ticks)
var throwinDistance = 270; // distance players can move the ball during throw in
var mapBGColor = "86A578"; // default 718C5A
var superAdminCode ="khoaxd"; // !admin 505050
var allowPublicAdmin = false; // if true then !admin command is enabled
var powerShotMode = true;
var resetdoi = false;
var autoStart = true; // default
var testcurve = false;
var autoswap = false;
var colorball = "FFFFFF";
var ballcolor = "0xFFA326";
var playerballcolor = ["mauvang","maula","mauxanh","mauhong","mauxam"];
var tookasize = {};
var min_size = 11;
var max_size = 14;
/*-------------------------------- STADIUMS ---------------------------------*/

var realSoccerMap = `{"name" : "Map", "width" : 1800, "height" : 900, "spawnDistance" : 560, "bg" : {"type" : "grass", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "`+mapBGColor+`" }, "playerPhysics" : {"radius" : 12, "bCoef" : 0.5, "invMass" : 0.5, "damping" : 0.96, "acceleration" : 0.1011, "kickingAcceleration" : 0.07, "kickingDamping" : 0.95, "kickStrength" : 5.65 }, "ballPhysics" : {"radius" : 6.5, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.9857, "color" : "`+colorball+`", "cMask" : [ "all" ], "cGroup" : [ "ball" ] }, "vertexes" : [ {"x" : 0, "y" : 879, "trait" : "kickOffBarrier" }, {"x" : 0, "y" : 180, "trait" : "kickOffBarrier" }, {"x" : 0, "y" : -180, "trait" : "kickOffBarrier" }, {"x" : 1150, "y" : 320, "trait" : "line" }, {"x" : 740, "y" : 322, "trait" : "line" }, {"x" : 1150, "y" : -320, "trait" : "line" }, {"x" : 738, "y" : -317, "trait" : "line" }, {"x" : 1150, "y" : 180, "trait" : "line" }, {"x" : 1030, "y" : 180, "trait" : "line" }, {"x" : 1150, "y" : -180, "trait" : "line" }, {"x" : 1030, "y" : -180, "trait" : "line" }, {"x" : 738, "y" : -132, "trait" : "line", "curve" : -130 }, {"x" : 741, "y" : 134, "trait" : "line", "curve" : -130 }, {"x" : -1150, "y" : -320, "trait" : "line" }, {"x" : -741, "y" : -320, "trait" : "line" }, {"x" : -1150, "y" : 320, "trait" : "line" }, {"x" : -740, "y" : 318, "trait" : "line" }, {"x" : -1150, "y" : -175, "trait" : "line" }, {"x" : -1030, "y" : -175, "trait" : "line" }, {"x" : -1150, "y" : 175, "trait" : "line" }, {"x" : -1030, "y" : 175, "trait" : "line" }, {"x" : -740, "y" : 132, "trait" : "line", "curve" : -130 }, {"x" : -741, "y" : -129, "trait" : "line", "curve" : -130 }, {"x" : 875, "y" : 4, "trait" : "line" }, {"x" : 884, "y" : 5, "trait" : "line" }, {"x" : -1150, "y" : 570, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : -1120, "y" : 600, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : -1120, "y" : -600, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : -1150, "y" : -570, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : 1120, "y" : 600, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : 1150, "y" : 570, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : 1150, "y" : -570, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : 1120, "y" : -600, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : -180 }, {"x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180 }, {"x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180 }, {"x" : -1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false }, {"x" : -1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false }, {"x" : 1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false }, {"x" : 1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false }, {"x" : 1030, "y" : -40, "trait" : "line", "color" : "576C46" }, {"x" : 1030, "y" : 40, "trait" : "line", "color" : "576C46" }, {"x" : -1030, "y" : -40, "trait" : "line", "color" : "576C46" }, {"x" : -1030, "y" : 40, "trait" : "line", "color" : "576C46" }, {"x" : 0, "y" : 3, "trait" : "line" }, {"x" : 0, "y" : -3, "trait" : "line" }, {"x" : -1300, "y" : -460, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false }, {"x" : 1300, "y" : -460, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false }, {"x" : -1300, "y" : 460, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false }, {"x" : 1300, "y" : 460, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false }, {"x" : -1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : -500, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : -500, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : -1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : 1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : 500, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : 500, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : 1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"x" : -1149, "y" : -102, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ] }, {"x" : -1211, "y" : -103, "bCoef" : 0.1, "cMask" : ["red","blue" ], "bias" : 0, "curve" : 5 }, {"x" : -1150, "y" : 103, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ] }, {"x" : -1209, "y" : 103, "bCoef" : 0.1, "cMask" : ["red","blue" ], "bias" : 0, "curve" : 5 }, {"x" : -1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ] }, {"x" : -1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ] }, {"x" : 1152, "y" : 101, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ] }, {"x" : 1214, "y" : 101, "bCoef" : 0.1, "cMask" : ["red","blue" ], "curve" : -5 }, {"x" : 1150, "y" : -102, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ] }, {"x" : 1211, "y" : -104, "bCoef" : 0.1, "cMask" : ["red","blue" ], "curve" : -5 }, {"x" : 1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ] }, {"x" : 1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ] }, {"x" : -893, "y" : -4, "trait" : "line" }, {"x" : -884, "y" : -3, "trait" : "line" }, {"x" : -78.39996337890625, "y" : 678.1999999880791 }, {"x" : -78.39996337890625, "y" : 800.1999999880791 }, {"x" : -266.39996337890625, "y" : 798.1999999880791 }, {"x" : -265.39996337890625, "y" : 677.1999999880791 }, {"x" : -244.39996337890625, "y" : 691.1999999880791 }, {"x" : -107.39996337890625, "y" : 692.1999999880791 }, {"x" : 267.60003662109375, "y" : 677.1999999880791 }, {"x" : 268.60003662109375, "y" : 799.1999999880791 }, {"x" : 82.60003662109375, "y" : 798.1999999880791 }, {"x" : 81.60003662109375, "y" : 676.1999999880791 }, {"x" : 110.60003662109375, "y" : 693.1999999880791 }, {"x" : 245.60003662109375, "y" : 694.1999999880791 }, {"x" : 269.20001220703125, "y" : 737.2000732421875, "color" : "ff0000" }, {"x" : 1302.606201171875, "y" : 737.6312255859375, "color" : "ff0000" }, {"x" : -267.5937490463257, "y" : 733.6312255859375, "color" : "fff000" }, {"x" : -1300.5937490463257, "y" : 732.6312255859375, "color" : "fff000" }, {"x" : -1298.193748474121, "y" : -727.3687438964844 }, {"x" : 1301.606201171875, "y" : -785.3687438964846 }, {"x" : 1229.800048828125, "y" : -100.20001220703125 }, {"x" : 1205.800048828125, "y" : -88.20001220703125 }, {"x" : 1228.800048828125, "y" : 90.79998779296875 }, {"x" : 1203.800048828125, "y" : 85.79998779296875 }, {"x" : -1299, "y" : -734.4000015258789 }, {"x" : 7.453032989332655, "y" : -665.7820388066623 }, {"x" : -0.7077080702271132, "y" : -663.2517610830092 }, {"x" : 1381, "y" : -836 }, {"x" : -1329, "y" : -840 }, {"bCoef" : 0, "x" : -78.20001220703125, "y" : 899.800048828125 }, {"x" : 81.79998779296875, "y" : 898.800048828125 }, {"x" : -1.20001220703125, "y" : 748.800048828125 }, {"x" : -1.20001220703125, "y" : 792.800048828125 }, {"x" : 1229.5999755859375, "y" : 207.19999998807907, "color" : "ff0000" }, {"x" : 1229.5999755859375, "y" : 596.0000488162041, "color" : "ff0000" }, {"x" : 920.5999755859375, "y" : 672.1999999880791, "color" : "ff0000" }, {"x" : 613.2000732421875, "y" : 673.1999999880791, "color" : "ff0000" }, {"x" : -267, "y" : 675.1999999880791, "color" : "ff0000" }, {"x" : -615, "y" : 673.1999999880791, "color" : "ff0000" }, {"x" : -799, "y" : 673.1999999880791, "color" : "ff0000" }, {"x" : -1145, "y" : 674.1999999880791, "color" : "ff0000" }, {"x" : -1013, "y" : 671.1999999880791, "color" : "ff0000" }, {"x" : -1144, "y" : 671.1999999880791, "color" : "ff0000" }, {"x" : -1230, "y" : -218.40000611543655, "color" : "ff0000" }, {"x" : -1230, "y" : -600.399998486042, "color" : "ff0000" }, {"x" : -1076, "y" : -674.6000030636787, "color" : "ff0000" }, {"x" : -734, "y" : -672.6000030636787, "color" : "ff0000" }, {"x" : -400, "y" : -672.6000030636787, "color" : "ff0000" }, {"x" : -1.20001220703125, "y" : -671.6000030636787, "color" : "ff0000" }, {"x" : 544.800048828125, "y" : -672.6000030636787, "color" : "ff0000" }, {"x" : 1156.5999755859375, "y" : -669.6000030636787, "color" : "ff0000" }, {"x" : 919.5999755859375, "y" : 672.4000732302666 }, {"x" : 1155.5999755859375, "y" : 671.4000732302666 }, {"x" : 268.4000244140625, "y" : 674.4000732302666 }, {"x" : 614.4000244140625, "y" : 672.4000732302666 }, {"x" : -797.6000003814697, "y" : 673.4000732302666 }, {"x" : -615.6000003814697, "y" : 672.4000732302666 }, {"x" : -1231.400001525879, "y" : 600.6000244021416 }, {"x" : -1231.400001525879, "y" : 209.99998778104782 }, {"x" : -733.3999938964844, "y" : -672.0000007748604, "curve" : 41.829785918289325 }, {"x" : -405.79998779296875, "y" : -673.0000007748604 }, {"x" : 0.800048828125, "y" : -671.0000007748604 }, {"x" : 544.800048828125, "y" : -672.0000007748604 }, {"x" : 1229.5999755859375, "y" : -604.0000007748604 }, {"x" : 1228.5999755859375, "y" : -214.99998170137405 }, {"x" : 1382.599998474121, "y" : -887.4000015258789 }, {"x" : 1384.599998474121, "y" : 888.5999984741211 }, {"x" : 1449.599998474121, "y" : -889.4000015258789 }, {"x" : 1449.599998474121, "y" : 888.5999984741211 }, {"x" : -1397, "y" : 889 }, {"x" : -1396, "y" : -883, "curve" : 100 }, {"x" : 1309, "y" : -786 }, {"x" : -1254, "y" : -788 }, {"x" : 1158, "y" : -671 }, {"x" : 1452, "y" : 887 }, {"x" : -1402, "y" : 887, "curve" : 100 }, {"x" : 1381, "y" : 818 }, {"x" : 80, "y" : 823 }, {"x" : -80, "y" : 825, "curve" : 0 }, {"x" : -1361, "y" : 823, "curve" : 0 }, {"x" : -1232, "y" : 602.1999999880791 }, {"x" : 1301.5999755859375, "y" : -604.9999969601631 }, {"x" : -1329, "y" : -599.0000007748604 }, {"x" : -1384, "y" : -220.80000001192093, "curve" : -60 }, {"x" : -1388, "y" : 212.19999998807907, "curve" : -60 }, {"x" : 1449.5999755859375, "y" : -220.80000001192093 }, {"x" : 1449.5999755859375, "y" : 209.19999998807907 }, {"x" : 1161.5999755859375, "y" : 888.1999999880791 }, {"x" : 1449.5999755859375, "y" : 599.1999999880791 }, {"x" : -1144, "y" : 887.1999999880791 }, {"x" : -1331, "y" : 601.1999999880791 }, {"x" : -0.5999755859375, "y" : -180, "trait" : "kickOffBarrier" }, {"x" : -0.5999755859375, "y" : -879, "trait" : "kickOffBarrier" }, {"x" : -1300, "y" : 729.77783203125, "curve" : 80 }, {"x" : -1297, "y" : -730.8888854980469, "curve" : 60 }, {"x" : -1244.4666709899902, "y" : -786.4000091552734, "curve" : 60 }, {"x" : -1359.4666709899902, "y" : 817.533447265625 }, {"x" : 1228, "y" : -726 }, {"x" : -1141, "y" : -718 }, {"x" : 1321, "y" : 594 }, {"x" : 1206, "y" : -95 }, {"x" : -1207, "y" : -93 }, {"x" : -1224, "y" : -98 }, {"x" : -1205, "y" : 92 }, {"x" : -1221, "y" : 96 }, {"x" : -1542, "y" : 624 }, {"x" : -1514, "y" : -673 }, {"x" : -736.7999877929688, "y" : -884, "curve" : 41.829785918289325 }, {"x" : 686.800048828125, "y" : -673, "curve" : -41.829785918289325 }, {"x" : 685.800048828125, "y" : -888, "curve" : -41.829785918289325 }, {"x" : -418, "y" : -831, "curve" : 200 }, {"x" : -416, "y" : -775, "curve" : 200 }, {"x" : -420, "y" : -729 }, {"x" : -382, "y" : -732 }, {"x" : -190, "y" : -810 }, {"x" : -134, "y" : -809 }, {"x" : -190, "y" : -810 }, {"x" : -189, "y" : -813 }, {"x" : -164, "y" : -779 }, {"x" : -153, "y" : -778 }, {"x" : -155, "y" : -778 }, {"x" : -185, "y" : -737 }, {"x" : -50, "y" : -760, "curve" : 180 }, {"x" : -122, "y" : -761, "curve" : 180 }, {"x" : -121.93035843121365, "y" : -758.0565678295341, "curve" : 180 }, {"x" : -49.92343125014372, "y" : -758.1059433305015, "curve" : 180 }, {"x" : 15, "y" : -730 }, {"x" : 13, "y" : -793 }, {"x" : 77, "y" : -729 }, {"x" : 75, "y" : -792 }, {"x" : 139, "y" : -729 }, {"x" : 137, "y" : -792 }, {"x" : 91, "y" : -762 }, {"x" : 135, "y" : -762 }, {"x" : 160, "y" : -795 }, {"x" : 160, "y" : -729 }, {"x" : 160, "y" : -782 }, {"x" : 193, "y" : -783 }, {"x" : -332, "y" : -735 }, {"x" : -334, "y" : -798 }, {"x" : -380, "y" : -768 }, {"x" : -336, "y" : -768 }, {"x" : -278, "y" : -796 }, {"x" : -277, "y" : -737 }, {"x" : -276, "y" : -733 }, {"x" : -261, "y" : -824 }, {"x" : -259, "y" : -747 }, {"x" : -259, "y" : -748 }, {"x" : -222, "y" : -748 }, {"x" : 233.62064567556797, "y" : -823.6630330809087 }, {"x" : 281.4821642088482, "y" : -722.7356317257871 }, {"x" : 327.029792746114, "y" : -824.4586687923475 }, {"x" : 348.41743064970683, "y" : -728.3116980143078 }, {"x" : 346.1652292354006, "y" : -820.9338909668511 }, {"x" : 414.08504217841653, "y" : -728.0783542034005 }, {"x" : 415.1843255283719, "y" : -822.6507816038404 }], "segments" : [ {"v0" : 0, "v1" : 1, "trait" : "kickOffBarrier" }, {"v0" : 3, "v1" : 4, "trait" : "line", "y" : 320 }, {"v0" : 4, "v1" : 6, "trait" : "line", "x" : 840 }, {"v0" : 5, "v1" : 6, "trait" : "line", "y" : -320 }, {"v0" : 7, "v1" : 8, "trait" : "line", "y" : 180 }, {"v0" : 8, "v1" : 10, "trait" : "line", "x" : 1030 }, {"v0" : 9, "v1" : 10, "trait" : "line", "y" : -180 }, {"v0" : 11, "v1" : 12, "curve" : -115.03004932348748, "trait" : "line", "x" : 840 }, {"v0" : 13, "v1" : 14, "trait" : "line", "y" : -320 }, {"v0" : 14, "v1" : 16, "trait" : "line", "x" : -840 }, {"v0" : 15, "v1" : 16, "trait" : "line", "y" : 320 }, {"v0" : 17, "v1" : 18, "trait" : "line", "y" : -175 }, {"v0" : 18, "v1" : 20, "trait" : "line", "x" : -1030 }, {"v0" : 19, "v1" : 20, "trait" : "line", "y" : 175 }, {"v0" : 21, "v1" : 22, "curve" : -128.78262365321427, "trait" : "line", "x" : -840 }, {"v0" : 23, "v1" : 24, "curve" : -72.48856522569984, "trait" : "line", "x" : -935 }, {"v0" : 23, "v1" : 24, "curve" : 105.30664991118994, "trait" : "line", "x" : -935 }, {"v0" : 23, "v1" : 24, "curve" : 90, "trait" : "line", "x" : -935 }, {"v0" : 23, "v1" : 24, "curve" : 190.15921587093973, "trait" : "line", "x" : -935 }, {"v0" : 23, "v1" : 24, "trait" : "line", "x" : -935, "curve" : -170.58730644106595 }, {"v0" : 25, "v1" : 26, "curve" : 90, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"v0" : 27, "v1" : 28, "curve" : 90, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"v0" : 29, "v1" : 30, "curve" : 90, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"v0" : 31, "v1" : 32, "curve" : 90, "bCoef" : -2.9, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" }, {"v0" : 34, "v1" : 33, "curve" : -180, "vis" : false, "bCoef" : 0.1, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" }, {"v0" : 36, "v1" : 37, "curve" : 70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : -1030 }, {"v0" : 38, "v1" : 39, "curve" : -70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : 1030 }, {"v0" : 34, "v1" : 35, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" }, {"v0" : 40, "v1" : 41, "vis" : true, "color" : "576C46", "trait" : "line", "x" : 1030 }, {"v0" : 42, "v1" : 43, "vis" : true, "color" : "576C46", "trait" : "line", "x" : -1030 }, {"v0" : 44, "v1" : 45, "curve" : -180, "trait" : "line", "x" : -935 }, {"v0" : 44, "v1" : 45, "curve" : 180, "trait" : "line", "x" : -935 }, {"v0" : 44, "v1" : 45, "curve" : 90, "trait" : "line", "x" : -935 }, {"v0" : 44, "v1" : 45, "curve" : -90, "trait" : "line", "x" : -935 }, {"v0" : 44, "v1" : 45, "trait" : "line", "x" : -935 }, {"v0" : 46, "v1" : 47, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : -460 }, {"v0" : 48, "v1" : 49, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : 460 }, {"v0" : 50, "v1" : 51, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 51, "v1" : 52, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 52, "v1" : 53, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 54, "v1" : 55, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 55, "v1" : 56, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 56, "v1" : 57, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] }, {"v0" : 58, "v1" : 59, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "y" : -124 }, {"v0" : 60, "v1" : 61, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "y" : 124 }, {"v0" : 61, "v1" : 59, "curve" : 5, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "bias" : 0 }, {"v0" : 59, "v1" : 62, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] }, {"v0" : 61, "v1" : 63, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] }, {"v0" : 64, "v1" : 65, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "y" : 124 }, {"v0" : 66, "v1" : 67, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "y" : -124 }, {"v0" : 65, "v1" : 67, "curve" : -5, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ] }, {"v0" : 67, "v1" : 68, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] }, {"v0" : 65, "v1" : 69, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] }, {"v0" : 70, "v1" : 71, "curve" : -72.48856522569984, "trait" : "line", "x" : -935 }, {"v0" : 70, "v1" : 71, "curve" : 105.30664991118994, "trait" : "line", "x" : -935 }, {"v0" : 70, "v1" : 71, "curve" : 90, "trait" : "line", "x" : -935 }, {"v0" : 70, "v1" : 71, "curve" : 190.15921587093973, "trait" : "line", "x" : -935 }, {"v0" : 70, "v1" : 71, "trait" : "line", "x" : -935, "curve" : -170.58730644106595 }, {"color" : "FFFFFF", "v0" : 72, "v1" : 73 }, {"color" : "FFFFFF", "v0" : 73, "v1" : 74 }, {"color" : "FFFFFF", "v0" : 74, "v1" : 75 }, {"color" : "FFFFFF", "v0" : 75, "v1" : 72 }, {"color" : "FFFFFF", "v0" : 76, "v1" : 77 }, {"color" : "FFFFFF", "v0" : 78, "v1" : 79 }, {"color" : "FFFFFF", "v0" : 79, "v1" : 80 }, {"color" : "FFFFFF", "v0" : 80, "v1" : 81 }, {"color" : "FFFFFF", "v0" : 81, "v1" : 78 }, {"color" : "FFFFFF", "v0" : 82, "v1" : 83 }, {"color" : "ff0000", "v0" : 84, "v1" : 85 }, {"color" : "fff000", "v0" : 86, "v1" : 87 }, {"color" : "ff9933", "v0" : 85, "v1" : 89 }, {"color" : "00ff00", "v0" : 87, "v1" : 94, "curve" : 0.7786339803211149 }, {"curve" : 0, "color" : "111111", "v0" : 97, "v1" : 98 }, {"color" : "ffffff", "bCoef" : 0, "v0" : 73, "v1" : 99, "curve" : 1.8211163331765419 }, {"color" : "ffffff", "v0" : 80, "v1" : 100 }, {"color" : "ffffff", "v0" : 101, "v1" : 102 }, {"color" : "ff0000", "v0" : 103, "v1" : 104 }, {"color" : "ff0000", "v0" : 105, "v1" : 106 }, {"color" : "ff0000", "v0" : 107, "v1" : 108 }, {"color" : "ff0000", "v0" : 109, "v1" : 110 }, {"color" : "ff0000", "v0" : 113, "v1" : 114 }, {"color" : "ff0000", "v0" : 115, "v1" : 116 }, {"color" : "ff0000", "v0" : 117, "v1" : 118 }, {"color" : "ff0000", "v0" : 119, "v1" : 120 }, {"color" : "3333ff", "v0" : 121, "v1" : 122 }, {"color" : "3333ff", "v0" : 123, "v1" : 124 }, {"color" : "3333ff", "v0" : 125, "v1" : 126 }, {"color" : "3333ff", "v0" : 127, "v1" : 128 }, {"color" : "3333ff", "v0" : 129, "v1" : 130 }, {"color" : "3333ff", "v0" : 131, "v1" : 132 }, {"color" : "3333ff", "v0" : 133, "v1" : 134 }, {"color" : "3333ff", "v0" : 135, "v1" : 136 }, {"color" : "3333ff", "v0" : 137, "v1" : 138, "curve" : 0.19488341589816824 }, {"curve" : 68.86472918858149, "color" : "ff0000", "v0" : 139, "v1" : 140 }, {"curve" : 0.19488341589816824, "color" : "ff0000", "v0" : 140, "v1" : 137 }, {"curve" : 0.19488341589816824, "color" : "ff0000", "v0" : 141, "v1" : 142 }, {"curve" : -5.606719420813419, "color" : "ff0000", "v0" : 115, "v1" : 140 }, {"curve" : -1.3797619869272368, "color" : "ff0000", "v0" : 143, "v1" : 137 }, {"curve" : 0.19488341589816824, "color" : "ff0000", "v0" : 139, "v1" : 138 }, {"curve" : 0.19488341589816824, "color" : "ff0000", "v0" : 144, "v1" : 85 }, {"curve" : 0.19488341589816824, "color" : "ff0000", "v0" : 145, "v1" : 87 }, {"color" : "ff0000", "v0" : 146, "v1" : 147 }, {"curve" : 0, "color" : "fff000", "v0" : 148, "v1" : 149 }, {"v0" : 133, "v1" : 151 }, {"v0" : 114, "v1" : 152 }, {"v0" : 113, "v1" : 153 }, {"v0" : 128, "v1" : 154 }, {"v0" : 134, "v1" : 155 }, {"v0" : 103, "v1" : 156 }, {"v0" : 122, "v1" : 157 }, {"v0" : 104, "v1" : 158 }, {"v0" : 112, "v1" : 159 }, {"v0" : 150, "v1" : 160 }, {"v0" : 161, "v1" : 162, "trait" : "kickOffBarrier", "curve" : -0.1319742020162972 }, {"curve" : 29.59254993226798, "color" : "ff0000", "v0" : 163, "v1" : 164 }, {"curve" : 60, "color" : "ff0000", "v0" : 164, "v1" : 165 }, {"curve" : -22.541095336374834, "color" : "3333ff", "v0" : 144, "v1" : 137 }, {"color" : "ff0000", "v0" : 167, "v1" : 168 }, {"v0" : 93, "v1" : 92 }, {"v0" : 170, "v1" : 90 }, {"v0" : 171, "v1" : 172 }, {"v0" : 173, "v1" : 174 }, {"color" : "fff000", "v0" : 180, "v1" : 181, "curve" : 186.3986435888033 }, {"color" : "fff000", "v0" : 180, "v1" : 182 }, {"color" : "fff000", "v0" : 181, "v1" : 183 }, {"color" : "fff000", "v0" : 184, "v1" : 185, "curve" : 141.9436920223878 }, {"curve" : -90.17494880915079, "color" : "fff000", "v0" : 187, "v1" : 188 }, {"color" : "fff000", "v0" : 188, "v1" : 189 }, {"color" : "fff000", "v0" : 190, "v1" : 191, "curve" : 218.4105316566905 }, {"curve" : 180, "color" : "fff000", "v0" : 192, "v1" : 193 }, {"curve" : 180, "color" : "fff000", "v0" : 194, "v1" : 195 }, {"curve" : 224.67857738803235, "color" : "fff000", "v0" : 196, "v1" : 197 }, {"curve" : 224.67857738803235, "color" : "fff000", "v0" : 198, "v1" : 199 }, {"curve" : 224.67857738803235, "color" : "fff000", "v0" : 200, "v1" : 201 }, {"color" : "fff000", "v0" : 202, "v1" : 203 }, {"color" : "fff000", "v0" : 204, "v1" : 205 }, {"color" : "fff000", "v0" : 206, "v1" : 207, "curve" : 175.63671719289732 }, {"curve" : 224.67857738803235, "color" : "fff000", "v0" : 208, "v1" : 209 }, {"color" : "fff000", "v0" : 210, "v1" : 211 }, {"color" : "fff000", "v0" : 212, "v1" : 213, "curve" : -218.45037065070238 }, {"color" : "fff000", "v0" : 212, "v1" : 214 }, {"color" : "fff000", "v0" : 215, "v1" : 216 }, {"color" : "fff000", "v0" : 217, "v1" : 218, "curve" : -170.3671856770381 }, {"color" : "fff000", "v0" : 219, "v1" : 220 }, {"color" : "fff000", "v0" : 220, "v1" : 221 }, {"color" : "fff000", "v0" : 222, "v1" : 223 }, {"color" : "fff000", "v0" : 223, "v1" : 224 }, {"color" : "fff000", "v0" : 224, "v1" : 225 }], "goals" : [ {"team" : "red", "p0" : [-1164,-101.79998779296875 ], "p1" : [-1164,108.20001220703125 ] }, {"team" : "blue", "p0" : [1162.800048828125,-103.79998779296875 ], "p1" : [1164.800048828125,102.20001220703125 ] }], "discs" : [ {"radius" : 0, "invMass" : 0, "pos" : [-1311,-19 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["ball" ] }, {"radius" : 0, "invMass" : 0, "pos" : [-1310,29 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["ball" ] }, {"radius" : 0, "invMass" : 0, "pos" : [-1308,62 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ] }, {"radius" : 2.7, "pos" : [-1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" }, {"radius" : 2.7, "pos" : [1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" }, {"radius" : 2.7, "pos" : [1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" }, {"radius" : 5, "invMass" : 0, "pos" : [-1149,-101 ], "bCoef" : 0.5, "trait" : "goalPost" }, {"radius" : 5, "invMass" : 0, "pos" : [-1150,105 ], "bCoef" : 0.5, "trait" : "goalPost" }, {"radius" : 2, "invMass" : 0, "pos" : [-1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" }, {"radius" : 2, "invMass" : 0, "pos" : [-1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" }, {"radius" : 5, "invMass" : 0, "pos" : [1151,-102 ], "bCoef" : 0.5, "trait" : "goalPost" }, {"radius" : 5, "invMass" : 0, "pos" : [1151,101 ], "bCoef" : 0.5, "trait" : "goalPost" }, {"radius" : 2, "invMass" : 0, "pos" : [1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" }, {"radius" : 2, "invMass" : 0, "pos" : [1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" }, {"radius" : 2.7, "pos" : [-1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" }, {"radius" : 0, "pos" : [-1149,-460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [1149,-460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [-1149,-460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [1149,-460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [-1149,460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [1149,460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [-1149,460 ], "cMask" : ["none" ] }, {"radius" : 0, "pos" : [1149,460 ], "cMask" : ["none" ] }, {"radius" : 7, "invMass" : 0, "pos" : [-0.5999755859375,684.800048828125 ], "color" : "fff000", "bCoef" : 0, "trait" : "goalPost" }], "planes" : [ {"normal" : [0,1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" }, {"normal" : [0,-1 ], "dist" : -628, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" }, {"normal" : [0,1 ], "dist" : -670, "bCoef" : 0 }, {"normal" : [0,-1 ], "dist" : -878, "bCoef" : 0 }, {"normal" : [1,0 ], "dist" : -1301, "bCoef" : 0 }, {"normal" : [-1,0 ], "dist" : -1300, "bCoef" : 0.1 }, {"normal" : [1,0 ], "dist" : -1210, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ], "color" : "ffffff" }, {"normal" : [-1,0 ], "dist" : -1230, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }], "traits" : {"ballArea" : {"vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }, "goalPost" : {"radius" : 5, "invMass" : 0, "bCoef" : 1, "cGroup" : ["ball" ] }, "rightNet" : {"radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c3" ] }, "leftNet" : {"radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c2" ] }, "stanchion" : {"radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] }, "cornerflag" : {"radius" : 3, "invMass" : 0, "bCoef" : 0.2, "color" : "FFFF00", "cMask" : ["ball" ] }, "reargoalNetleft" : {"vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" }, "reargoalNetright" : {"vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" }, "sidegoalNet" : {"vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" }, "kickOffBarrier" : {"vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }, "line" : {"vis" : true, "cMask" : [ ], "color" : "C7E6BD" }}, "joints" : [ {"d0":16,"d1":17,"strength":"rigid","color":"ec7458","length":null}, {"d0":18,"d1":19,"strength":"rigid","color":"48bef9","length":null}, {"d0":20,"d1":21,"strength":"rigid","color":"ec7458","length":null}, {"d0":22,"d1":23,"strength":"rigid","color":"48bef9","length":null}], "redSpawnPoints" : [ [ -214, 0 ], [ -370, -164 ], [ -347, 140 ], [ -542, -12 ], [ -745, -153 ], [ -723, 128 ], [ -996, 0 ], [ -42, 843 ] ], "blueSpawnPoints" : [ [ 214, 0 ], [ 370, -164 ], [ 347, 140 ], [ 542, -12 ], [ 745, -153 ], [ 723, 128 ], [ 996, 0 ], [ 40, 843 ] ], "canBeStored" : false }`;

/*------------------------------ END OF STADIUMS ----------------------------*/

// ------------------------------------------------
// Global Variables
// ------------------------------------------------
var roomName =  "???????7vs7 REALSOCCER~~ MAP VNRSW????";
var roomPassword = null;
var maxPlayers = 40;
var roomPublic = false;
var token = "thr1.AAAAAGL8-k2yxQ-l0hMoEQ.yUj1fSBgLg0";
var roomLink = "";
var gameTime = 10; //default game time if 0 is selected
var map = "RSR";
var superAdmins = [];
var rolePro = [];
var roleTa = [];
var roleToxic = [];
var roleVipPro = [];
var roleVipPro2 = [];
var treochan = [];
var wait_red = [];
var wait_blue = [];
var playerid = [];
var JMap = JSON.parse(realSoccerMap);
const webhooks = {
    "replay":"",//"https://discord.com/api/webhooks/1011095545458212975/xEje4N29eL8KTdP8hI_-j07agFFFpsNNeigmsUPzlq6FWajQGfByjs0LSg4DunF3U5UO",
    "chat":"",//"https://discord.com/api/webhooks/1011095790028066816/ZNHVVISkzdMgiSJSx5S8itFotkRXnweEZNxxNlVTanO_RP6jGliyXw7SUSqJuIVe9q-c",
    "antifake":"https://discord.com/api/webhooks/1057988844055707648/qKnSc3Etr61BnLRGK_1QUSBfOIYudtZNlJF3pahTrKAGnPwjWc0PkDPCuFzAOnVkiRFb",//"https://discord.com/api/webhooks/1011096144518066226/j7TIeYcM_RS9UvUgV2Hs9H0DX6ErxA-ImJwpL46B-24aOfOixf3umXk9o3F2XxA-8d3m",
    "autolink":""//"https://discord.com/api/webhooks/1011169080469889044/Cpu4ZjLOkU9tpl7UAUC7epcEFfY2hLQAe0bcUqYgsLY5tIqqdMaDY_SJRlishCytaQHu"
}

var goals = [];
var bithevang = [];
var bithedo = [];


var room = HBInit({
	roomName: roomName,
	password: roomPassword,
	maxPlayers: maxPlayers,
	public: roomPublic,
	geo: {"lat":16.46,"lon":107.59,"code":"vn"},
	noPlayer: true,
	token: token
});

var roomObject = {
		lastTeamTouched: 0,
		lastPlayerTouched: undefined,
		previousPlayerTouched: undefined,
		assistingTouch: undefined,
		activity: {red:0,blue:0},
		possession: {red:0,blue:0},
		teams: ["??????","????","????"],
        randomUniforms: true,
		triggerDistance: 25.01 //O raio da bola + o raio do jogador + 0.01
}

function initPlayerStats(player){
}

// Team //
var teams = ["spectators","red","blue"];

function movePlayersToTeams(player,message){
    var team = parseInt(message.split(" ")[1]);
    var players = room.getPlayerList();

    if(player.admin == true){
	if(0 <= team && team <= 2){
	    players.forEach(p => room.setPlayerTeam(p.id,team));
	    room.sendAnnouncement("T???t c??? ng?????i ch??i ???? b??? chuy???n qua " + teams[team] + " b???i " + player.name,null,0x00FF00,"bold",0);
	}
	else{
	    room.sendAnnouncement("ID Team kh??ng h???p l???!",player.id,0xFFFF00,"bold",1);
	}
    }
    else{
	room.sendAnnouncement("You have no authorization to move players to teams!",player.id,0xFF0000,"bold",2);
    }
}

// chat 
var messageColors = {
	superadmin: 0xfff000,
	admin: 0x66ff00, 
	pro: 0x00ffff,
	vippro: 0x00ffff,
	unrank: 0x808080,
	red: 0xff1f1f, 
	blue: 0x03f8fc, 
	spec: 0xe4ebe4
};
var statusreserve = "????";
var prefixsuperadmin = "????"
var prefixadmin = "????";
var prefixpro = "???";
var prefixvippro = "????";
var prefixtoxic = "????";
var prefixta = "T???";
var prefixvippro2 = "????"
var prefixred = "????";
var prefixblue = "????";
var messageTarget = null;
var messageFonts = {normal: "normal", bold: "bold", italic: "italic", small: "small", small_bold: "small-bold", small_italic: "small-italic"};
var messageSounds = {nothing: 0, normal: 1, highlight: 2};

//poss
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;
const playerRadius = 15;
var ballRadius = 8.5;
const triggerDistance = playerRadius + ballRadius + 0.01;
var lastTouches = Array(2).fill(null);
var lastTeamTouched;
var activePlay = false;
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };
var gameState = State.STOP;
var playSituation = Situation.STOP;
var init = "init";
var gk = [init, init];

/* OPTIONS */

var afkLimit = 30;
var drawTimeLimit = Infinity;
var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

var extendedP = [];
const eP = { ID: 0, AUTH: 1, AFK: 2, ACT: 3 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

//poss
var possession = [0, 0];
var actionZoneHalf = [0, 0];
var streak = 0;

function teamPoss() {
	if (gameState == State.PLAY){
		let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
		let possessionBluePct = 100 - possessionRedPct;
		let possessionString = `???? ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% ????`;
		whisper(`???? T??? l??? ki???m so??t b??ng: ???? ${possessionString}\n`, player.id, 0xffff00, "normal");
	}
	else if (gameState == State.STOP){
		whisper("Tr???n ?????u ch??a b???t ?????u!", player.id, 0xff0000, "normal");
	}
}

function updateTeams(player) {
	players = room.getPlayerList().filter((player) => player.id != 0); // && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			whisper("N???u b???n kh??ng di chuy???n ho???c chat sau " + Math.floor(afkLimit / 3) + " gi??y, b???n s??? ???????c chuy???n v??o d??? b???!", extendedP[i][eP.ID], 0x8b0000, "bold");
		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
			room.setPlayerTeam(extendedP[i][eP.ID], 0);
			announce(room.getPlayer(extendedP[i][eP.ID]).name + " ???? ???????c chuy???n v??o d??? b??? do AFK!");
			whisper("B???n ???? ???????c chuy???n v??o d??? b??? do AFK!", extendedP[i][eP.ID], 0xffffff, "normal")
		}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

/*function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
} */

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
}

// winner

function endGame() { // no stopGame() function in it
	if (game.redScore > game.blueScore) {
		streak++;
		announce("Tr???n ?????u k???t th??c v???i t??? s??? l??" + " ???? " + game.redScore + " - " + game.blueScore + " ???? | " + "?????i ???? ???? d??nh chi???n th???ng! | Chu???i th???ng: " + streak + " ????");
		if	(dadangnhap.indexOf(gk[0].id) > -1 && dadangnhap.indexOf(gk[1].id) > -1) {
		AccountsObject[PlayerObject[gk[1].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[1].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].money += gkMoney;
		AccountsObject[PlayerObject[gk[1].id].conn].money += gkMoney;
		}
	}
	else if (game.redScore < game.blueScore) {
		streak = 1;
		announce("Tr???n ?????u k???t th??c v???i t??? s??? l??" + " ???? " + game.redScore + " - " + game.blueScore + " ???? | " + "?????i ???? ???? d??nh chi???n th???ng! | Chu???i th???ng: " + streak + " ????");
		if	(dadangnhap.indexOf(gk[0].id) > -1 && dadangnhap.indexOf(gk[1].id) > -1) {
		AccountsObject[PlayerObject[gk[1].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[1].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].money += gkMoney;
		AccountsObject[PlayerObject[gk[1].id].conn].money += gkMoney;
		}
	}
	else {
		streak = 0;
		announce("Tr???n ?????u k???t th??c v???i t??? s??? l??" + " ???? " + game.redScore + " - " + game.blueScore + " ???? | " + "C??? hai ?????i ?????u h??a!");
		if	(dadangnhap.indexOf(gk[0].id) > -1 && dadangnhap.indexOf(gk[1].id) > -1) {
		AccountsObject[PlayerObject[gk[1].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].gk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[1].id].conn].topgk += 1;
		AccountsObject[PlayerObject[gk[0].id].conn].money += gkMoney;
		AccountsObject[PlayerObject[gk[1].id].conn].money += gkMoney;
		}
	}
	announce(`???? T??? l??? ki???m so??t b??ng: ???? ${(100 * roomObject.possession.red / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}% - ${(100 * roomObject.possession.blue / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}% ???? | ???? T??? l??? b??ng trong khu v???c: ???? ${(100 * roomObject.activity.red / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}% - ${(100 * roomObject.activity.blue / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}% ????`);
	check();
	LevelSistem.check.gk(game);
	LevelSistem.check.teamVictory(game);
	checkRank();

	sendmvp(); 
	sendDiscordWebhook();
	announce("Th??ng Tin Tr???n ?????u ???? ???????c G???i Tr??n Discord!");
	updateStats();
	Request.put();
	room.getPlayerList().forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0; playerList[p.id - 1].warn1 = 0});
}

function sendmvp() {
	if (game.redScore > game.blueScore) {
	mvp = SortRanks();
	announce("MVP: " + mvp.name + " | Ghi b??n: " + mvp.matchgoals + " | Ki???n t???o: " + mvp.matchassists, null, 0xadff2f, "bold", 0);
	if	(dadangnhap.indexOf(mvp.id) > -1) {
		AccountsObject[PlayerObject[mvp.id].conn].mvp += 1;
		AccountsObject[PlayerObject[mvp.id].conn].money += mvpMoney;
		}
	}
	else if (game.redScore < game.blueScore) {
	mvp = SortRanks();
	announce("MVP: " + mvp.name + " | Ghi b??n: " + mvp.matchgoals + " | Ki???n t???o: " + mvp.matchassists, null, 0xadff2f, "bold", 0);
	if	(dadangnhap.indexOf(mvp.id) > -1) {
		AccountsObject[PlayerObject[mvp.id].conn].mvp += 1;
		AccountsObject[PlayerObject[mvp.id].conn].money += mvpMoney;
		}
	}
	else if (game.redScore == 0 && game.blueScore == 0){
		announce("Tr???n ?????u h??a ???? 0 - 0 ???? n??n s??? kh??ng c?? ai MVP!", null, 0xff0000, "bold", 0);
	}
	else {
	mvp = SortRanks();
	announce("MVP: " + mvp.name + " | Ghi b??n: " + mvp.matchgoals + " | Ki???n t???o: " + mvp.matchassists, null, 0xadff2f, "bold", 0);
	if	(dadangnhap.indexOf(mvp.id) > -1) {
		AccountsObject[PlayerObject[mvp.id].conn].mvp += 1;
		AccountsObject[PlayerObject[mvp.id].conn].money += mvpMoney;
		}
	}
	//room.getPlayerList().filter(p => playerList[p.id - 1].isInTheRoom == true).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
}

// reset team
function resetTeam() {
	if (resetdoi == true) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
		announce("C??c ?????i ???? ???????c chuy???n v??o d??? b???");
	}
}


function isGk(){ // gives the mosts backward players before the first kickOff
    var players = room.getPlayerList();
    var min = players[0];
    min.position = {x: room.getBallPosition().x + 60}
    var max = min;

    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null){
            if (min.position.x > players[i].position.x) min = players[i];
            if (max.position.x < players[i].position.x) max = players[i];
        }
    }
    return [min, max]
}

/*var findGKRed = false;
var findGKRed2 = false;
var findGKRed3 = false;
var redGK = [];
function GKRed(player) {
	if (room.getScores() != null) {
		if (findGKRed == true) {
			announce("???? GK: " + gk[0].name + " ???? r???i kh???i ?????i. Nh???p !gk ????? l??m gk.")
			announce("???? GK: N???u sau 10 gi??y kh??ng ai l??m GK th?? ng?????i ch??i trong ?????i s??? ???????c ch???n ng???u nhi??n.")
			if (findGKRed2 == true) {
				sleep(10000).then(() => {
					findGKRed3 = true;
				});
			}
			if (findGKRed3 == true) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			var min = players[0];
			min.position = {x: room.getBallPosition().x + 60}
			var max = min;
		
			for (var i = 0; i < players.length; i++) {
				if (players[i].position != null){
					if (min.position.x > players[i].position.x) min = players[i];
					if (max.position.x < players[i].position.x) max = players[i];
				}
			}
			announce("???? GK: " + gk[0].name + " ???? ???????c ch???n l??m GK.")
			redGK.push(gk[0].id);
			findGKRed = false;
			return [min, max]
			}
		}
	}
}*/

function gkFun(player){ // !gk
    if (room.getScores() != null && room.getScores().time < 60){
        if (player.team == 1) {
            gk[0] = player;
        }
        else if (player.team == 2){
            gk[1] = player;
        }
    }
    return;
}

//swap
function swapTeam() {
	if (autoswap == true) {
		var players = room.getPlayerList().filter((player) => player.id != 0 );
		if ( players.length == 0 ) return false;
		players.forEach(function(player) {	
		if (player.team == 1) {
			room.setPlayerTeam(player.id, 2);
		}
		if (player.team == 2) {
			room.setPlayerTeam(player.id, 1);
		}
		announce("C??c ?????i ???? ???????c ?????i s??n!");
	});
	}
}

// auto admin
var maxwarn	= 5;
var badword = ["c???c","l???n","sex","cu","ch???ch","lone","fuck","?????t","m??ng","????t","arsehole","cock","tinh tr??ng","","suck","piss","arse",
"bitch","????","cum","ass"];
const Links = ['youtube.com/','https:/','facebook.com/','discord.gg/','discord.com/invite/'];
var adminip = ["3131362E3130382E3136302E3432","3131352E37362E3134332E313939","33382E35342E31342E323434","3131362E3130382E3136302E3432"];
function autoAdmin(player) {
	if (adminip.includes(player.conn)==true) {
		room.setPlayerAdmin(player.id, true);
		superAdmins.push(player.id);
	}
}

function kickname(player) {
	if (player.name.startsWith(" ")) {
		room.kickPlayer(player.id,"T??n kh??ng ???????c c?? kho???ng tr???ng ph??a tr?????c!",false);
	}
}

var db = { p: { N: 3, kt: 0.6 }, log: [] }; 
function f(a, b, c) { 
	for (var i = 0; i < a.length; i += 1) { 
		if (a[i][b] === c) { 
			return i; 
		} 
	} 
	return -1; 
} 

function spamFilter(player, message) { 
	if (player.id == 0) { 
		return; 
	} 
	var ind = f(db.log, 'id', player.id); 
	db.log[ind].lm.push({ ts: Date.now() }); 
	if (db.log[ind].lm.length >= db.p.N) { 
		db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); 
		if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 800) > db.p.kt) { 
			room.kickPlayer(player.id, "Spam", true); 
		} 
	}
}
function antisech(player, message) { 
	if (badword.includes(message.toLowerCase())) {
		//room.kickPlayer(player.id,"S??? d???ng t??? ng??? kh??ng ph?? h???p!",true);
		playerList[player.id - 1].warn1++;
		if (playerList[player.id - 1].warn1 < 5) {
			whisper("B???n v???a s??? d???ng t??? ng??? kh??ng ph?? h???p, vui l??ng ki???m ch??? l???i. (warn " + playerList[player.id - 1].warn1 + "/" + maxwarn + ")", player.id);
		}
		else {
			room.kickPlayer(player.id,"S??? d???ng t??? ng??? kh??ng ph?? h???p!",true);
			playerList[player.id - 1].warn1 = 0;
		}
	}
}
//mvp 
var lastScores = 0;
var lastTeamTouched = 0;
var previousBallPos;
var assistingTouch = undefined;
var lastPlayerTouched = undefined;
var previousPlayerTouched;
var radiusBall = JMap.ballPhysics.radius; //Requires your map to have ballPhysics with a real radius value.
var radiusPlayer = JMap.playerPhysics.radius; //Requires your map to have playerPhysics with a real radius value.
var mvp;
var playerList = [];
var thongke = [];

function getLastTouchTheBall() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (lastPlayerTouched != players[i]) {
                    if (lastTeamTouched == players[i].team) {
                        assistingTouch = lastPlayerTouched;
                    }
                    else {
                        assistingTouch = undefined;
                    }
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i];
            }
        }
    }
    return lastPlayerTouched;
}

function pointDistance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function SortRanks() {
    mvp = playerList[0];
    for(var i=0; i<playerList.length; i++){
        if(playerList[i].matchgoals > mvp.matchgoals){
            mvp = playerList[i];
        }
        else if(playerList[i].matchgoals == mvp.matchgoals){
            if(playerList[i].matchassists > mvp.matchassists){
                mvp = playerList[i];
            }
        }
    }

    return mvp;
}

function TopScorer() {
	var Best = playerList[0]; 
	for(var i=0; i<playerList.length; i++){
		if(playerList[i].banthang > Best.banthang){
			Best = playerList[i];
		}
		else if(playerList[i].banthang == Best.banthang){
		}
	} 
	if(Best == null){return}announce("Ng?????i ch??i ghi b??n nhi???u nh???t: " + Best.name + " | Ghi b??n: " + Best.banthang, null, 0xadff2f, "bold", 0);
}


var interval = 400000;

function autoclearBan(){
    announce("Danh s??ch ban ???? ???????c l??m s???ch!");
	room.clearBans();
	banList = [];

}

var sendMessageInterval = setInterval(function(){autoclearBan();},interval);

function checkcard() {
	for(var i=0; i<playerList.length; i++){
		if (playerList[i].thevang == 2) {
			room.setPlayerTeam(playerList[i].id, 0);
			announce(playerList[i].name + " ???? ???????c cho ra kh???i s??n!")
			if (treochan.indexOf(playerList[i].id) === -1) {
				treochan.push(playerList[i].id);
			}
		}
	}
	for(var i=0; i<playerList.length; i++){
		if (playerList[i].thedo == 1) {
			room.setPlayerTeam(playerList[i].id, 0);
			announce(playerList[i].name + " ???? ???????c cho ra kh???i s??n!")
			if (treochan.indexOf(playerList[i].id) === -1) {
				treochan.push(playerList[i].id);
			}
		}
	}
}

function check() {
	for(var i=0; i<playerList.length; i++){
		let index = treochan.indexOf(playerList[i].id);
		if (index > -1) {
			sleep(100).then(() => {
				treochan.splice(index, 1);
			});
		}
	}
}
// votekick
var timeObject = {Seconds: 1000, Minutes: 60000, Hours: 3600000};
var bikick = [];
var ids = [];
var votekickdangdienra = false;
var kick_count = 0;
var nonkick_count = 0;
var davotekick = [];
var delayvotekick = false;

var biban = [];
var votebandangdienra = false;
var ban_count = 0;
var nonban_count = 0;
var davoteban = [];
var delayvoteban = false;

var min = 1;
var max = 50;
function random(player) {
	const a = Math.floor(Math.random() * (max - min + 1)) + min;
	announce(`Random value between ${min} and ${max} is ${a}`, player.id);
}

// level
var basePoints = [0,80,150,250,350,480,600,850,1200,1500];
var ranks = ["Bronze","Silver","Iron","Gold","Aluminum","Diamond","Titan","Platinum","Gemstone","Master"];
//              1		 2        3     4       5          6          7        8          9       10

function checkPlayerRank(player){ //You can invoke this function in the functions in which you updated the statistics. There's no problem because of there are the same amount of ranks and base points.
    for(var r=0; r<ranks.length; r++){
	if(r < ranks.length-1){
	    if(basePoints[r] <= AccountsObject[PlayerObject[player.id].conn].points && AccountsObject[PlayerObject[player.id].conn].points < basePoints[r+1] && AccountsObject[PlayerObject[player.id].conn].rank != ranks[r]){
		AccountsObject[PlayerObject[player.id].conn].rank = ranks[r];
	    }
	}
	else{
	    if(basePoints[r] <= AccountsObject[PlayerObject[player.id].conn].points && AccountsObject[PlayerObject[player.id].conn].rank != ranks[r]){
		AccountsObject[PlayerObject[player.id].conn].rank = ranks[r];
	    }
	}
    }
}

function checkRank(){
	players = room.getPlayerList();
	for(var i=0; i<players.length; i++){
    for(var r=0; r<ranks.length; r++){
		if(r < ranks.length-1){
			if(basePoints[r] <= AccountsObject[PlayerObject[players[i].id].conn].points && AccountsObject[PlayerObject[players[i].id].conn].points < basePoints[r+1] && AccountsObject[PlayerObject[players[i].id].conn].rank != ranks[r]){
				AccountsObject[PlayerObject[players[i].id].conn].rank = ranks[r];
			}
		}
		else{
			if(basePoints[r] <= AccountsObject[PlayerObject[players[i].id].conn].points && AccountsObject[PlayerObject[players[i].id].conn].rank != ranks[r]){
				AccountsObject[PlayerObject[players[i].id].conn].rank = ranks[r];
			}
		}
	}
	}
}

function TopScorer1() {
	var Best = playerList[0]; 
	for(var i=0; i<playerList.length; i++){
		if(playerList[i].banthang > Best.banthang){
			Best = playerList[i];
		}
		else if(playerList[i].banthang == Best.banthang){
		}
	} 
	if(Best == null){return}announce("Ng?????i ch??i ghi b??n nhi???u nh???t: " + Best.name + " | Ghi b??n: " + Best.banthang, null, 0xadff2f, "bold", 0);
}


let playerGoalXp = 5,
	playerOwnGoalXp = 5,
	PlayerAssistXp = 3,
	teamVictoryXp = 10,
	gkXp = 5,
	csXp = 8,
	teamLoserXp = 2,
	
	playerGoalMoney = 100,
	PlayerAssistMoney = 80,
	playerOwnGoalMoney = 50,
	teamVictoryMoney = 200,
	gkMoney = 50,
	mvpMoney = 80,
	csMoney = 100,
	teamLoserMoney = 30;

let LevelSistem = {
	check: {
		teamVictory: game=>{
			redTeam = room.getPlayerList().filter(player=> player.team == 1);
			blueTeam = room.getPlayerList().filter(player=> player.team == 2);
			adminRed = room.getPlayerList().filter(player=> superAdmins.indexOf(player.id) && player.team == 1);
			adminBlue = room.getPlayerList().filter(player=> superAdmins.indexOf(player.id) && player.team == 2);
			if	(superAdmins.indexOf(adminRed.id) > -1 && superAdmins.indexOf(adminBlue.id) > -1) {
				if (dadangnhap.indexOf(adminRed.id) > -1 && dadangnhap.indexOf(adminBlue.id) > -1) {
				if (game.redScore > game.blueScore) {
					for(let i = 0; i < adminRed.length; i++) {
						AccountsObject[PlayerObject[adminRed[i].id].conn].points += 2*teamVictoryXp;
						AccountsObject[PlayerObject[adminRed[i].id].conn].toppoint += 2*teamVictoryXp;
						AccountsObject[PlayerObject[adminRed[i].id].conn].topwin += 1;
						AccountsObject[PlayerObject[adminRed[i].id].conn].thang += 1;
						AccountsObject[PlayerObject[adminRed[i].id].conn].money += 2*teamVictoryMoney;
					};
					for(let i = 0; i < adminBlue.length; i++) {
						AccountsObject[PlayerObject[adminBlue[i].id].conn].points += 2*teamLoserXp;
						AccountsObject[PlayerObject[adminBlue[i].id].conn].thua += 1;
						AccountsObject[PlayerObject[adminBlue[i].id].conn].money += 2*teamLoserMoney
					};
				}
				else if (game.redScore < game.blueScore){
					for(let i = 0; i < adminRed.length; i++) {
						AccountsObject[PlayerObject[adminRed[i].id].conn].points += 2*teamLoserXp;
						AccountsObject[PlayerObject[adminRed[i].id].conn].thua += 1;
						AccountsObject[PlayerObject[adminRed[i].id].conn].money += 2*teamLoserMoney
					};
					for(let i = 0; i < adminBlue.length; i++) {
						AccountsObject[PlayerObject[adminBlue[i].id].conn].points += 2*teamVictoryXp;
						AccountsObject[PlayerObject[adminBlue[i].id].conn].toppoint += 2*teamVictoryXp;
						AccountsObject[PlayerObject[adminBlue[i].id].conn].money += 2*teamVictoryMoney
						AccountsObject[PlayerObject[adminBlue[i].id].conn].topwin += 1;
						AccountsObject[PlayerObject[adminBlue[i].id].conn].thang += 1;
					};
				}
				else {
					for(let i = 0; i < adminRed.length; i++) {
						AccountsObject[PlayerObject[adminRed[i].id].conn].points += 0;
						};
						for(let i = 0; i < adminBlue.length; i++) {
							AccountsObject[PlayerObject[adminBlue[i].id].conn].points += 0;
						};	
					}
				}
			}
			else {
			if (game.redScore > game.blueScore) {
				for(let i = 0; i < redTeam.length; i++) {
					if (dadangnhap.indexOf(redTeam[i].id) > -1) {
					AccountsObject[PlayerObject[redTeam[i].id].conn].points += teamVictoryXp;
					AccountsObject[PlayerObject[redTeam[i].id].conn].toppoint += teamVictoryXp;
					AccountsObject[PlayerObject[redTeam[i].id].conn].money += teamVictoryMoney;
					AccountsObject[PlayerObject[redTeam[i].id].conn].topwin += 1;
					AccountsObject[PlayerObject[redTeam[i].id].conn].thang += 1;
					}
				};
				for(let i = 0; i < blueTeam.length; i++) {
					if (dadangnhap.indexOf(blueTeam[i].id) > -1) {
					AccountsObject[PlayerObject[blueTeam[i].id].conn].points += teamLoserXp;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].toppoint += teamLoserXp;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].money += teamLoserMoney;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].thua += 1;
					}
				};
			}
			else if (game.redScore < game.blueScore){
				for(let i = 0; i < redTeam.length; i++) {
					if (dadangnhap.indexOf(redTeam[i].id) > -1) {
					AccountsObject[PlayerObject[redTeam[i].id].conn].points += teamLoserXp;
					AccountsObject[PlayerObject[redTeam[i].id].conn].toppoint += teamLoserXp;
					AccountsObject[PlayerObject[redTeam[i].id].conn].money += teamLoserMoney;
					AccountsObject[PlayerObject[redTeam[i].id].conn].thua += 1;
					}
				};
				for(let i = 0; i < blueTeam.length; i++) {
					if (dadangnhap.indexOf(blueTeam[i].id) > -1) {
					AccountsObject[PlayerObject[blueTeam[i].id].conn].points += teamVictoryXp;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].toppoint += teamVictoryXp;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].money += teamVictoryMoney;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].topwin += 1;
					AccountsObject[PlayerObject[blueTeam[i].id].conn].thang += 1;
					}
				};	
			}
			else {
				for(let i = 0; i < redTeam.length; i++) {
				AccountsObject[PlayerObject[redTeam[i].id].conn].points += 0;
				};
				for(let i = 0; i < blueTeam.length; i++) {
					AccountsObject[PlayerObject[blueTeam[i].id].conn].points += 0;
				};	
			}
			}
		},
		goal: scorer=>{
			if (scorer == game.lastKickerId) {
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
					if	(superAdmins.indexOf(game.lastKickerId) > -1) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += 2*playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += 2*playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
				}
				else {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
					}
				}
			}
		},
		assists: assists=>{
		if (assists == game.secondLastKickerId) {
			if (dadangnhap.indexOf(game.secondLastKickerId) > -1) {
			if	(superAdmins.indexOf(game.secondLastKickerId) > -1) {
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += 2*PlayerAssistXp;
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += 2*PlayerAssistXp;
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
			AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
			}
			else{
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += PlayerAssistXp;
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += PlayerAssistXp;
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
				AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
			}
		}
		}
		},
		owngoal: scorer=>{
			if (scorer == game.lastKickerId) {
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].phanluoi += 1;
				if (AccountsObject[PlayerObject[game.lastKickerId].conn].points < 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += 0;
				}
				else if (AccountsObject[PlayerObject[game.lastKickerId].conn].points >= 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint -= playerOwnGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].points -= playerOwnGoalXp;
				}
			}
		}
		},
		gk: game=>{
			if (game.redScore == 0) {
				announce("???? " + gk[0].name + " ???? gi??? goal s???ch l?????i!")
				if (dadangnhap.indexOf(gk[0].id) > -1) {
				if	(superAdmins.indexOf(gk[0].id) > -1) {
				AccountsObject[PlayerObject[gk[0].id].conn].cs += 1;
				AccountsObject[PlayerObject[gk[0].id].conn].points += 2*csXp;
				AccountsObject[PlayerObject[gk[0].id].conn].toppoint += 2*csXp;
				AccountsObject[PlayerObject[gk[0].id].conn].topcs += 1;
				AccountsObject[PlayerObject[gk[0].id].conn].money += 2*csMoney;
				}
				else{
					AccountsObject[PlayerObject[gk[0].id].conn].cs += 1;
					AccountsObject[PlayerObject[gk[0].id].conn].points += csXp;
					AccountsObject[PlayerObject[gk[0].id].conn].toppoint += csXp;
					AccountsObject[PlayerObject[gk[0].id].conn].topcs += 1;
					AccountsObject[PlayerObject[gk[0].id].conn].money += csMoney;
				}
				}
			}
			else if (game.blueScore == 0) {
				announce("???? " + gk[1].name + " ???? gi??? goal s???ch l?????i!")
				if (dadangnhap.indexOf(gk[1].id) > -1) {
				if	(superAdmins.indexOf(gk[1].id) > -1) {
				AccountsObject[PlayerObject[gk[1].id].conn].cs += 1;
				AccountsObject[PlayerObject[gk[1].id].conn].points += 2*csXp;
				AccountsObject[PlayerObject[gk[1].id].conn].toppoint += 2*csXp;
				AccountsObject[PlayerObject[gk[1].id].conn].topcs += 1;
				AccountsObject[PlayerObject[gk[1].id].conn].money += 2*csMoney
				}
				else{
				AccountsObject[PlayerObject[gk[1].id].conn].cs += 1;
				AccountsObject[PlayerObject[gk[1].id].conn].toppoint += csXp;
				AccountsObject[PlayerObject[gk[1].id].conn].topcs += 1;
				AccountsObject[PlayerObject[gk[1].id].conn].points += csXp;
				AccountsObject[PlayerObject[gk[0].id].conn].money += csMoney
				}
				}
			}
		}
	},
};


class Itens extends Array{
	namemaubong(namemaubong){return this.find(x=>x.namemaubong===namemaubong);}
	namemauchat(namemauchat){return this.find(x=>x.namemauchat===namemauchat);}
	addMau(...x){this.push(...x);if(x.length===1)return x[0];else return x;}
}
class Mau{
	constructor(store){
		this.namemaubong=store.namemaubong||null;
		this.giamaubong=store.giamaubong||null;
		this.namemauchat=store.namemauchat||null;
		this.giamauchat=store.giamauchat||null;
	}
}
let store = new Itens();

//m??u b??ng
store.addMau(new Mau({
	namemaubong:"mauxam",
	giamaubong:5000,
}));

store.addMau(new Mau({
	namemaubong:"maula",
	giamaubong:15000,
}));

store.addMau(new Mau({
	namemaubong:"mauxanh",
	giamaubong:30000,
}));

store.addMau(new Mau({
	namemaubong:"mauhong",
	giamaubong:50000,
}));


//mauchat
store.addMau(new Mau({
	namemauchat:"maula",//7fff00
	giamauchat:15000,
}));

store.addMau(new Mau({
	namemauchat:"maulam",//80daeb
	giamauchat:30000,
}));

store.addMau(new Mau({
	namemauchat:"mautim",//5218fa
	giamauchat:45000,
}));

store.addMau(new Mau({
	namemauchat:"mauvang",//ffdb58
	giamauchat:50000,
}));

let shop = {
	maubong: {
		mauxam: {
			ten:"X??m",
			gia:"5000$",
		},
		maula: {
			ten:"L??",
			gia:"15000$"
		},
		mauxanh: {
			ten:"Xanh",
			gia:"30000$",
		},
		mauhong: {
			ten:"H???ng",
			gia:"50000$"
		},
	},
};

function shopmaubong(player, message) {
	var message = message.split(" ");
	if (tenmaubong(message[2])) {
		if (AccountsObject[PlayerObject[player.id].conn].money >= giamaubong(message[2])) {
			if (store.maubong(message[2])) {
				if (AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf(message[2]) > -1){
					whisper("B???n ???? mua n?? r???i!", player.id);
				}
				else {
				AccountsObject[PlayerObject[player.id].conn].maubongdamua.push(message[2])
				AccountsObject[PlayerObject[player.id].conn].money -= store.maubong(message[2]).giamaubong;
				}
			}
			room.sendAnnouncement(`B???n v???a mua m??u ${tenmaubong(message[2])} cho b??ng khi ch???m v???i gi??: ${converterDinheiroEmReais(giamaubong(message[2]))}$.`, player.id, 0x00ff00, "small");
			room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
		}
		else {
			whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
		}
	}
	else {
		whisper("Vui l??ng nh???p t??n m??u b??ng!", player.id);
	}
}

function shopmauchat(player, message) {
	var message = message.split(" ");
	if (tenmauchat(message[2])) {
		if (AccountsObject[PlayerObject[player.id].conn].money >= giamauchat(message[2])) {
			if (store.mauchat(message[2])) {
				if (AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf(message[2]) > -1){
					whisper("B???n ???? mua n?? r???i!", player.id);
				}
				else {
				AccountsObject[PlayerObject[player.id].conn].mauchatdamua.push(message[2])
				AccountsObject[PlayerObject[player.id].conn].money -= store.mauchat(message[2]).giamauchat;
				}
			}
			room.sendAnnouncement(`B???n v???a mua m??u chat ${tenmauchat(message[2])} v???i gi??: ${converterDinheiroEmReais(giamauchat(message[2]))}$.`, player.id, 0x00ff00, "small");
			room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
		}
		else {
			whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
		}
	}
	else if (message[2] == "") {
		whisper("Vui l??ng nh???p t??n m??u chat!", player.id);
	}
}

function tenmaubong(message) {
	if (store.namemaubong(message)) return store.namemaubong(message).namemaubong;
	if (store.namemauchat(message)) return store.namemauchat(message).namemauchat;
}

function giamaubong(message) {
	if (store.namemaubong(message)) return store.namemaubong(message).giamaubong;
	if (store.namemauchat(message)) return store.namemauchat(message).giamauchat;
}

function tenmauchat(message) {
	if (store.mauchat(message)) return store.mauchat(message).tenmauchat;
}

function giamauchat(message) {
	if (store.mauchat(message)) return store.mauchat(message).giamauchat;
}

function pay(player, id, sotien) {
	var players = room.getPlayerList();
	//var id = parts[1];
	//var sotien = parts[2];
	//var matchNumeros = sotien.match(sotien.replace(/[^0-9]/g));
	var conditionCheckMoney = AccountsObject[PlayerObject[player.id].conn].money <= sotien && sotien.match(sotien.replace(/[^0-9]/g));

	var p = players.find(x => x.id == id);
	if(p){
		//-----------------------------------------------------------------------------
		if(p.id == player.id){
			if (dadangnhap.indexOf(player.id) > -1) {
			whisper("B???n kh??ng th??? g???i ti???n cho ch??nh m??nh!", player.id);
			}
			else {
				whisper("Vui l??ng ????ng nh???p tr?????c ????? xem th??ng tin c???a m??nh!", player.id)
			}
		}
		//-----------------------------------------------------------------------------
		else{
			if (dadangnhap.indexOf(p.id) > -1) {
				if(!sotien.match(sotien.replace(/[^0-9]/g))) whisper("Vui l??ng nh???p s??? ti???n c???n g???i!", player.id);
				else if(sotien == null) whisper("Vui l??ng nh???p s??? ti???n c???n g???i!", player.id)
				else if (conditionCheckMoney) whisper("B???n kh??ng ????? ti???n!",player.id);
				else if (sotien <= 1) {
					whisper("Kh??ng th??? g???i s??? ti???n th???p h??n 1$", player.id);
				}
				else if (AccountsObject[PlayerObject[player.id].conn].money >= sotien){
					AccountsObject[PlayerObject[p.id].conn].money += Number(sotien);
					AccountsObject[PlayerObject[player.id].conn].money -= Number(sotien);
					whisper("B???n v???i g???i " + converterDinheiroEmReais(Number(sotien)) + "$ cho " + p.name,player.id, 0x00ff00, "small");
					whisper("B???n hi???n c??n: " + converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money) + "$", player.id, 0x00ff00, "small");
					whisper(player.name + " v???a g???i " + converterDinheiroEmReais(Number(sotien)) + "$ cho b???n!",p.id, 0x00ff00, "small");
				}
			}
			else {
				whisper("Ng?????i ch??i n??y ch??a ????ng nh???p!",player.id)
			}
		}
		}
		else{
			room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i ????!",player.id, 0xFF0000, "bold");
		}
	}
		//-----------------------------------------------------------------------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
 }
 
 function getScoresObjectTime(scores) {
    return Math.floor(Math.floor(scores/60)/10).toString()+Math.floor(Math.floor(scores/60)%10).toString()+":"+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))/10).toString()+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))%10).toString();
}

var stats;
var stats = new Map(); // map where will be set all player stats
var mutedPlayers = []; // Array where will be added muted players
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";


function GoalCalc(player){
	var name = player;
    players = Object.keys(thongke);
    account = players.find(a => a === name)
    if (account !== undefined){
		return thongke[player].topgoal * 1;
    }
    else {return 0;}
	//return AccountsObject[PlayerObject[player].conn].topgoal * 1;
}

function AssistCalc(player){
	var name = player;
    players = Object.keys(thongke);
    account = players.find(a => a === name)
    if (account !== undefined){
		return thongke[player].topassist * 1;
    }
    else {return 0;}
}

function WinsCalc(player){
	var name = player;
    players = Object.keys(thongke);
    account = players.find(a => a === name)
    if (account !== undefined){
		return thongke[player].topwin * 1;
    }
    else {return 0;}
}

function PointCalc(player){
    return thongke[player].toppoint;
}

function GKCalc(player){
	var name = player;
    players = Object.keys(thongke);
    account = players.find(a => a === name)
    if (account !== undefined){
		return thongke[player].topgk * 1;
    }
    else {return 0;}
}

function CSCalc(player){
	var name = player;
    players = Object.keys(thongke);
    account = players.find(a => a === name)
    if (account !== undefined){
		return thongke[player].topcs * 1;
    }
    else {return 0;}
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\\
//                     C??U C?? | Version 1                  \\
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\\
function randomStrength(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }
  function reroll(){
	    tencacauduoc = null
		cannangcacauduoc = null
		loaicacauduoc = null
		return "reroll"
  }

  
const fish = [
	// Rare
	cachinh = { ID: "1", FishIcon: "????", FishName: "C?? Ch??nh", FishStrength: randomStrength(1,6), FishType: "Rare", FishPriceSell: "", FishPriceBuy: "", TimeSpawn: ""},
	// Rare+ 
	cahe = { ID: "2", FishIcon: "????", FishName: "C?? H???", FishStrength: randomStrength(2,6), FishType: "Rare+", FishPriceSell: "", FishPriceBuy: "", TimeSpawn: ""      },
	// Rare++
	canoc = { ID: "3", FishIcon: "????", FishName: "C?? N??c", FishStrength: randomStrength(2,6), FishType: "Rare++", FishPriceSell: "", FishPriceBuy: "", TimeSpawn: ""      },
	// Legend
	songngu = { ID: "4", FishIcon: "????", FishName: "Song Ng??", FishStrength: randomStrength(10,35), FishType: "Legend", FishPriceSell: "", FishPriceBuy: "", TimeSpawn: ""      },
	camap = { ID: "5", FishIcon: "????", FishName: "C?? M???p", FishStrength: randomStrength(30,100), FishType: "Legend", FishPriceSell: "", FishPriceBuy: "", TimeSpawn: ""      },
	
];





const can_cau = [
	canphothong = { ID: 1, Name: "C???n Ph??? Th??ng", StrengthLimit: 10, expiry: 20, price: 150, tylegay: 0,}
];



var fishrand = {
    "1":70, 
    "2":50, 
    "3":40, 
    "4":5, 
    "5":2 
    
  
};

function get(input) {
    var array = []; 
    for(var fishrand in input) {
        if ( input.hasOwnProperty(fishrand) ) { 
            for( var i=0; i<input[fishrand]; i++ ) {
                array.push(fishrand);
            }
        }
    }
    // Probability Fun
    return array[Math.floor(Math.random() * array.length)];
}






function cauca(player, fish, can_cau, fishrand){
	
	let cancau = [];
	let ca = [];
	//let cacauduoc = fishrand[Math.floor(Math.random() * fishrand.length)]
	    // Object or Array. Which every you prefer.

	let 
	tencacauduoc = [],
	cannangcacauduoc = [],
	loaicacauduoc = [],
	tylecauduoc = [];

	let cacauduoc = get(fishrand); // See Console.
	
	


  

	if (cocancau.indexOf(player.id)) {
		whisper('??ang T??m C??....', player.id, 0xC6D881, "bold", 1);
		sleep(randomStrength(5000,12000)).then(() => {
			whisper('============================',player.id, 0x23D8BA, "small", 2)
			whisper(` ???? T??m Th???y C?? C?? ID: ${cacauduoc}`,player.id,0x23D8BA, "small", 0)
			whisper(` T??n: ${tencacauduoc} `,player.id,0x23D8BA, "small", 0)
			whisper(` C??n N???ng: ${cannangcacauduoc.toFixed(2)} Kg`,player.id,0x23D8BA, "small", 0)
			whisper(` Lo???i C??: ${loaicacauduoc}`,player.id,0x23D8BA, "small", 0)
			whisper(` T??? L??? C??u ???????c: `,player.id,0x23D8BA, "small", 0)
			whisper('============================',player.id,0x23D8BA, "small", 0)
			if (cacauduoc == songngu.ID || cacauduoc == camap.ID){
				whisper(`${player.name} ???? D??nh M???i ???????c ${tencacauduoc} N???ng ${cannangcacauduoc.toFixed(2)} Kg, ????y L?? Lo??i C?? ${loaicacauduoc}`, player.pm, 0xB50787, "bold", 2)
			}
			reroll();
			sleep(4000).then(() => {
			whisper('???????????????????????????????????? ????????????????????????',player.id,0x23D8BA, "bold", 1)
			whisper('        [1] ????? C??u [2] ????? Th???',player.id,0x23D8BA, "small", 0)
			whisper('???????????????????????????????????? ????????????????????????',player.id,0x23D8BA, "bold", 0)
		})
		});
		
	} else {
		whisper("B???n Kh??ng C?? C???n C??u !")
	}

	if (cacauduoc == cachinh.ID) {
		tencacauduoc = cachinh.FishName
		cannangcacauduoc = cachinh.FishStrength
		loaicacauduoc = cachinh.FishType
	}
	if (cacauduoc == cahe.ID) {
		tencacauduoc = cahe.FishName
		cannangcacauduoc = cahe.FishStrength
		loaicacauduoc = cahe.FishType
	}
	if (cacauduoc == canoc.ID) {
		tencacauduoc = canoc.FishName
		cannangcacauduoc = canoc.FishStrength
		loaicacauduoc = canoc.FishType
	}
	if (cacauduoc == songngu.ID) {
		tencacauduoc = songngu.FishName
		cannangcacauduoc = songngu.FishStrength
		loaicacauduoc = songngu.FishType
	}
	if (cacauduoc == camap.ID) {
		tencacauduoc = camap.FishName
		cannangcacauduoc = camap.FishStrength
		loaicacauduoc = camap.FishType
	}
	



}





function MoneyCalc(player){
	return thongke[player].money * 1;
}

let converterDinheiroEmReais = numero => numero.toLocaleString({ minimumFractionDigits: 2 , style: 'currency', currency: 'USD' });


//--------------------------LOGIN---------------------------------

const datarealtime = {
    "binID": "630ed9b8e13e6063dc934083",
    "APIkey": "$2b$10$gHEjCGKEEgXlNjJROVZHY.ZtxS3T2B0cg6VuCQhyd1dJZ5uaZE5eS"
}

/* V??DEO: https://www.loom.com/share/615038d8a24948a48c16b9f6fb155d37 */

let
prefixString = "!",
AccountsObject = {},
PlayerObject = {},
PlayerStatsObject = {},
dadangnhap = [],
dadangky = [],
binIdString = datarealtime.binID,
apiKeyString = datarealtime.APIkey;

let Commands = {
	dangky: (player, password)=>{  //????ng k??
		if (AccountsObject[PlayerObject[player.id].conn]) whisper(`B???n ???? ????ng k?? r???i.`, player.id);
		else {
			if (password == undefined) whisper(`B???n qu??n nh???p m???t kh???u c???a m??nh.`, player.id);
			else {
				if (password.length < 3) whisper(`M???t kh???u c???a b???n ph???i tr??n 3 k?? t???!`, player.id);
				else {
					AccountsObject[PlayerObject[player.id].conn] = { password: password, points: 0, rank: "Bronze", ghiban: 0, kientao: 0, thang: 0, thua: 0, phanluoi: 0, mvp: 0, playerballcolor: "mauvang", gk: 0, cs: 0,
					 topgoal: 0, topassist: 0, topwin: 0, toppoint: 0, topgk: 0, topcs: 0, money: 0, maubongdamua: ["mauvang"], mauchatdamua: [], mauchatdangdung: "khongco"};
					//topgoal: 0, topassist: 0, topwin: 0, toppoint: 0, topgk: 0, topcs: 0}			
					Request.put();
					dadangky.push(player.id);
					whisper(`B???n ???? ????ng k?? th??nh c??ng! M???t kh???u hi???n t???i c???a b???n l?? (${password})`, player.id);
					whisper(`Vui l??ng nh???p !dangnhap [m???t kh???u] ????? ????ng nh???p!`, player.id);
				}
			}
		}
	},
	dangnhap: (player, password, banthangdata)=>{  //????ng nh???pg
		if (!AccountsObject[PlayerObject[player.id].conn]) whisper(`B???n ch??a ????ng k?? t??i kho???n.`, player.id);
		else {
			if (AccountsObject[PlayerObject[player.id].conn].confirm == true) whisper(`B???n ???? ????ng nh???p r???i.`, player.id);
			else {
				if (password == undefined) whisper(`Vui l??ng nh???p m???t kh???u c???a b???n.`, player.id);
				else {
					if (AccountsObject[PlayerObject[player.id].conn].password != password) whisper(`M???t kh???u kh??ng ch??nh x??c.`, player.id);
					else {
						var points = AccountsObject[PlayerObject[player.id].conn].points;
						var totalplayer = AccountsObject[PlayerObject[player.id].conn].totalplayer;
						var rank = AccountsObject[PlayerObject[player.id].conn].rank;
						var ghiban = AccountsObject[PlayerObject[player.id].conn].ghiban;
						var kientao = AccountsObject[PlayerObject[player.id].conn].kientao;
						var thang = AccountsObject[PlayerObject[player.id].conn].thang;
						var thua = AccountsObject[PlayerObject[player.id].conn].thua;
						var phanluoi = AccountsObject[PlayerObject[player.id].conn].phanluoi;
						var mvp = AccountsObject[PlayerObject[player.id].conn].mvp;
						var playerballcolor = AccountsObject[PlayerObject[player.id].conn].playerballcolor;
						var gk = AccountsObject[PlayerObject[player.id].conn].gk;
						var cs = AccountsObject[PlayerObject[player.id].conn].cs;
						var topgoal = AccountsObject[PlayerObject[player.id].conn].topgoal;
						var topassist = AccountsObject[PlayerObject[player.id].conn].topassist;
						var topwin = AccountsObject[PlayerObject[player.id].conn].topwin;
						var toppoint = AccountsObject[PlayerObject[player.id].conn].toppoint;
						var topgk = AccountsObject[PlayerObject[player.id].conn].topgk;
						var topcs = AccountsObject[PlayerObject[player.id].conn].topcs;
						var money = AccountsObject[PlayerObject[player.id].conn].money;
						var maubongdamua = AccountsObject[PlayerObject[player.id].conn].maubongdamua;
						var cancaudamua = AccountsObject[PlayerObject[player.id].conn].cancaudamua;
						var tuica = AccountsObject[PlayerObject[player.id].conn].tuica;
						var moi = AccountsObject[PlayerObject[player.id].conn].moi
						var mauchatdamua = AccountsObject[PlayerObject[player.id].conn].mauchatdamua;
						var mauchatdangdung = AccountsObject[PlayerObject[player.id].conn].mauchatdangdung;
						var cancaudangdung = AccountsObject[PlayerObject[player.id].conn].cancaudangdung;
						thongke[player.name] = {
							topgoal: topgoal,
							 topassist: topassist,
							  topwin: topwin,
							   toppoint: toppoint,
							    topgk: topgk,
								 topcs: topcs,
								  money: money
								};
						AccountsObject[PlayerObject[player.id].conn] = {
							password: password,
							 name: player.name,
							  auth: player.auth,
							   conn: player.conn,
							    tuica: tuica,
								 cancaudamua: cancaudamua,
							     points: points,
								  rank: rank,
								   ghiban: ghiban,
								    kientao: kientao,
								     thang: thang,
									  thua: thua,
									   phanluoi: phanluoi,
									    mvp: mvp, 
									     playerballcolor: playerballcolor,
										  cancaudangdung: cancaudangdung,
									      gk: gk,
										   cs: cs,
										    totalplayer: totalplayer,
						topgoal: topgoal,
						 topassist: topassist,
						  topwin: topwin,
						   toppoint: toppoint,
						    topgk: topgk,
							 topcs: topcs,
							  money: money,
							   maubongdamua: maubongdamua,
							    mauchatdamua: mauchatdamua,
								 mauchatdangdung: mauchatdangdung
								};
							
						AccountsObject[PlayerObject[player.id].conn].confirm = true;
						dadangnhap.push(player.id);
						checkPlayerRank(player);
						announce(`?????? [${AccountsObject[PlayerObject[player.id].conn].rank}] ${player.name} ???? ????ng nh???p! ??????`);
					}
				}
			}
		}
	},
	doimk: (player, newPassword)=>{  //?????i mk
		if (!AccountsObject[PlayerObject[player.id].conn]) whisper(`B???n ch??a ????ng k?? t??i kho???n.`, player.id);
		else {
			if (AccountsObject[PlayerObject[player.id].conn].confirm == false) whisper(`Vui l??ng ????ng nh???p v??o t??i kho???n c???a b???n tr?????c.`, player.id);
			else {
				if (newPassword == undefined) whisper(`M???t kh???u ??t nh???t ph???i c?? ba ch??? s???.`, player.id);
				else {
					if (newPassword.length < 3) whisper(`M???t kh???u c???a b???n ph???i c?? ??t nh???t ba ch??? s???.`, player.id);
					else {
						AccountsObject[PlayerObject[player.id].conn].password = newPassword;
						whisper(`B???n ???? thay ?????i m???t kh???u! M???t kh???u m???i c???a b???n l?? (${newPassword})`, player.id);
					}
				}
			}
		}
	},
};

let Request = {
	get: ()=>{
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = () => {
			if (xhr.readyState == XMLHttpRequest.DONE) AccountsObject = JSON.parse(xhr.responseText)["record"];
		};

		xhr.open("GET", `https://api.jsonbin.io/v3/b/${binIdString}/latest`, true);
		xhr.setRequestHeader("X-Master-Key", `${apiKeyString}`);
		xhr.send();
	},
	put: ()=>{
		let xhr = new XMLHttpRequest();

		xhr.open("PUT", `https://api.jsonbin.io/v3/b/${binIdString}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("X-Master-Key", `${apiKeyString}`);
		xhr.send(JSON.stringify(AccountsObject));
	}
};

Request.get();
delete AccountsObject["key"];

function sendJoin(player, mesage) {

    var request = new XMLHttpRequest();
    request.open("POST", webhooks.antifake);

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        "content": null,
		"embeds": [
			{
			  "title": "??????????????????????????????????????????????????????????????????",
			  "color": 9568005,
			  "fields": [
				{
				  "name": "***PlayerName***:",
				  "value": "```\n" + `${player.name}`+"\n```"
				},
				{
				  "name": "***PlayerID***:",
				  "value": "```\n" + `${player.id}`+"\n```"
				},
				{
				  "name": "***Haxball IP:***",
				  "value": "```\n" + `${player.conn}`+"\n```"
				},
				{
				  "name": "***BrowserToken:***",
				  "value": "```\n" + `${player.auth}`+"\n```"
				},
				{
				  "name": "***RoomName***:",
				  "value": "```\n" + `${roomName}`+"\n```"
				},
				{
				  "name": "***RoomLink:***",
				  "value": "```\n" + `${roomLink}`+"\n```"
				},
				{
				  "name": "RoomTools:???\n???",
				  "value": "\n" + `[??????Tap Me To Join Room??????](${roomLink})`+"\n"
				}
			  ],
			  "author": {
				"name": "???????????????????????????????s ??o???? | 7x wo???????",
				"icon_url": "https://tse2.mm.bing.net/th?id=OIP.B5QIyh1mdQZcmt4ABjkbkgHaHa&pid=Api&P=0"
			  },
			  "footer": {
				"text": "( Code By 7x Team )",
				"icon_url": "https://tse4.mm.bing.net/th?id=OIP.Gr-oNxnumNazt6HQlRNBTQHaFj&pid=Api&P=0"
			  },
			  "image": {
				"url": `https://udalcell.sirv.com/s%E1%BA%B9c/f/image.png?text.0.text=${player.name}&text.0.position.x=-22%25&text.0.position.y=-33%25&text.0.size=22&text.0.font.family=Titillium%20Web&text.0.font.weight=700&text.0.font.style=italic&text.0.outline.blur=50&text.0.outline.opacity=20&text.1.text=${player.name.substr(0,1)}&text.1.position.x=-72%25&text.1.position.y=-24%25&text.1.size=10&text.1.color=f1f516&text.1.font.family=Sorts%20Mill%20Goudy&text.1.font.weight=800`
			  },
			  timestamp: new Date().toISOString()
			}
		  ],
		  "attachments": []
		};

    request.send(JSON.stringify(params));
}

/*const text_Poition = {
	x: -22,
	y: -33
}
var tpoint = { xpp: 0, ypp:0 }
xpp = -22;
ypp = -33;
*/



function sendroomlink() {

    var request = new XMLHttpRequest();
    request.open("POST", webhooks.autolink);

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
		"content": null,
		"embeds": [
		  {
			"title": "??????????????????????????????????????????????????????????????????",
			"color": 1287882,
			"fields": [
			  {
				"name": "***T???o ph??ng l??c:***",
				"value": "```\n" + `${thoigian()}` + "\n```",
				"inline": true
			  },
			  {
				"name": "***T??n Ph??ng:***",
				"value": "```\n" + roomName + "\n```"
			  },
			  {
				"name": "***Link Ph??ng:***",
				"value": "```\n" + roomLink + "\n```\n\n" + `[??????Tap Me To Join Room??????](${roomLink})`
			  }
			],
			"author": {
			  "name": "???????????????? ???????????????? ???????????????? | ???????????????? ???????????????????????? ???????? ????"
			},
			"footer": {
			  "text": "???????????????????????????????????????????????????????????????????????????????????????"
			}
		  }
		],
		"attachments": []
	  };

    request.send(JSON.stringify(params));
}

function updateStats(){
	players = room.getPlayerList();
	for(var i=0; i<players.length; i++){
	var password = AccountsObject[PlayerObject[players[i].id].conn].password;
	var points = AccountsObject[PlayerObject[players[i].id].conn].points;
	var rank = AccountsObject[PlayerObject[players[i].id].conn].rank;
	var cancaudamua = AccountsObject[PlayerObject[players[i].id].conn].cancaudamua;
	var moi = AccountsObject[PlayerObject[players[i].id].conn].moi;
	var cancaudangdung = AccountsObject[PlayerObject[players[i].id].conn].cancaudangdung;
	var ghiban = AccountsObject[PlayerObject[players[i].id].conn].ghiban;
	var kientao = AccountsObject[PlayerObject[players[i].id].conn].kientao;
	var thang = AccountsObject[PlayerObject[players[i].id].conn].thang;
	var thua = AccountsObject[PlayerObject[players[i].id].conn].thua;
	var phanluoi = AccountsObject[PlayerObject[players[i].id].conn].phanluoi;
	var mvp = AccountsObject[PlayerObject[players[i].id].conn].mvp;
	var playerballcolor = AccountsObject[PlayerObject[players[i].id].conn].playerballcolor;
	var gk = AccountsObject[PlayerObject[players[i].id].conn].gk;
	var cs = AccountsObject[PlayerObject[players[i].id].conn].cs;
	var totalplayer = AccountsObject[PlayerObject[players[i].id].conn].totalplayer;
	var topgoal = AccountsObject[PlayerObject[players[i].id].conn].topgoal;
	var topassist = AccountsObject[PlayerObject[players[i].id].conn].topassist;
	var topwin = AccountsObject[PlayerObject[players[i].id].conn].topwin;
	var toppoint = AccountsObject[PlayerObject[players[i].id].conn].toppoint;
	var topgk = AccountsObject[PlayerObject[players[i].id].conn].topgk;
	var topcs = AccountsObject[PlayerObject[players[i].id].conn].topcs;
	var money = AccountsObject[PlayerObject[players[i].id].conn].money;
	var maubongdamua = AccountsObject[PlayerObject[players.id].conn].maubongdamua;
	var mauchatdamua = AccountsObject[PlayerObject[players.id].conn].mauchatdamua;
	var mauchatdangdung = AccountsObject[PlayerObject[players.id].conn].mauchatdangdung;
	thongke[players[i].name] = {topgoal: topgoal, topassist: topassist, topwin: topwin, toppoint: toppoint, topgk: topgk, topcs: topcs, money: money};
	AccountsObject[PlayerObject[players[i].id].conn] = {password: password, name: players[i].name, points: points, rank: rank, ghiban: ghiban, kientao: kientao, thang: thang, thua: thua, phanluoi: phanluoi, mvp: mvp, playerballcolor: playerballcolor, gk: gk, cs: cs,
	topgoal: topgoal, topassist: topassist, topwin: topwin, toppoint: toppoint, topgk: topgk, topcs: topcs, money: money, maubongdamua: maubongdamua, mauchatdamua: mauchatdamua, mauchatdangdung: mauchatdangdung};
	}
}
var cocancau = [];
var dasudungnuoctangluc = [];

//--------------------------------------------------------------------------------------------------------
// -------------------------------------------------
// Classes
// -------------------------------------------------
class Game {
	constructor() {
		this.time = 0;
		this.paused = false;
		this.ballRadius;
		this.rsTouchTeam = 0;
		this.rsActive = true;
		this.rsReady = false;
		this.rsCorner = false;
		this.rsGoalKick = false;
		this.rsSwingTimer = 1000;
		this.rsTimer;
		this.ballOutPositionX;
		this.ballOutPositionY;
		this.throwInPosY;
		this.outStatus = "";
		this.warningCount = 0;
		this.bringThrowBack = false;
		this.extraTime = false;
		this.extraTimeCount = 0;
		this.extraTimeEnd;
		this.extraTimeAnnounced = false;
		this.lastPlayAnnounced = false;
		this.boosterState;
		this.throwinKicked = false;
		this.pushedOut;
		this.lastKickerId;
		this.lastKickerName;
		this.lastKickerTeam;
		this.secondLastKickerId;
		this.secondLastKickerName;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
		this.powershotCounter = 0;
		this.powershotID = 0;
		this.powershotTrigger = true;
	}
	
	updateLastKicker(id, name, team) {
		this.secondLastKickerId = this.lastKickerId;
		this.secondLastKickerName = this.lastKickerName;
		this.secondLastKickerTeam = this.lastKickerTeam;
		
		this.lastKickerId = id;
		this.lastKickerName = name;
		this.lastKickerTeam = team;
	}
}
class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

room.setCustomStadium(realSoccerMap);
room.setScoreLimit(0);
room.setTimeLimit(10);
room.setTeamsLock(true);

room.onRoomLink = function(url) {
	roomLink = url;
	console.log(roomLink);
	sendroomlink();
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
	if (byPlayer != null) {
		map = "custom";
	}
	else {
		map = "RSR";
	}
}

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	PlayerObject[player.id] = { conn: player.conn };
	var playerObject;
    /*if (localStorage.getItem(player.auth) == null) { //On first join
        playerObject = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: 0, assists: 0, matchgoals: 0, matchassists: 0, banthang: 0, thevang: 0, thedo: 0, points: 0, rank: "M???i b???t ?????u", ghiban: 0, kientao: 0, thang: 0, thua: 0, phanluoi: 0, mvp: 0, playerballcolor: "mautrang", gk: 0, cs: 0, isInTheRoom: true };
        localStorage.setItem(player.auth, JSON.stringify(playerObject));

        playerList[player.id - 1] = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: 0, assists: 0, matchgoals: 0, matchassists: 0, banthang: 0, thevang: 0, thedo: 0, isInTheRoom: true };
	}
    else if (localStorage.getItem(player.auth) != null) { //On second are more joins
        playerList[player.id - 1] = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: JSON.parse(localStorage.getItem(player.auth)).goals, assists: JSON.parse(localStorage.getItem(player.auth)).assists, matchgoals: 0, matchassists: 0, banthang: 0, isInTheRoom: true };
	}*/

	if(playerList[player.name] == undefined){
		playerObject = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: 0, assists: 0, matchgoals: 0, matchassists: 0, banthang: 0, thevang: 0, thedo: 0,warn1: 0, isInTheRoom: true };
        localStorage.setItem(player.auth, JSON.stringify(playerObject));

        playerList[player.id - 1] = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: 0, assists: 0, matchgoals: 0, matchassists: 0, banthang: 0, thevang: 0, thedo: 0, warn1: 0, isInTheRoom: true };
	}
	else{
		playerList[player.id - 1] = { auth: player.auth, conn: player.conn, name: player.name, id: player.id, goals: JSON.parse(localStorage.getItem(player.auth)).goals, assists: JSON.parse(localStorage.getItem(player.auth)).assists, matchgoals: 0, matchassists: 0, banthang: 0, ghiban: 0, warn1: 0, isInTheRoom: true };
	}
	if (db.log.filter((p) => p.id == player.id).length == 0) { 
			db.log.push({ id: player.id, lm: []}
		); 
	}
	console.log(player.name + " ???? v??o ph??ng | Auth" + player.auth + " | Conn: " + player.conn);
	authArray[player.id] = [player.auth, player.conn];

	sendJoin(player);
	whisper("????    ???? Ch??o M???ng ?????n V???i Worldcup,Champions Leagua  ????", player.id, 0x61ddff, "bold", 0);     
               whisper(" ????    ???W                MAP REAL SOCCER 7Vs7              W???", player.id, 0x61e7ff, "bold", 0);  
	whisper("????    ??????? Nh???p !help ????? bi???t th??m v??? c??c l???nh c???a Player ho???c !adminhelp ????? bi???t th??m v??? c??c l???nh c???a Admin ???", player.id, 0x61ddff, "bold", 0);
	whisper(" ???    Nh???p !teamred ho???c !teamblue ????? ch???n team ???????", player.pm, 0xfff70f, "bold", 0);
    whisper(" ???????T                     L??u ?? : !spec ????? v??o d??? b???                         T????", player.id, 0xffc400, "bold", 0); 
	sleep(150).then(() => {
	whisper(" Nh???p !dangky [mk] ????? ????ng k?? t??i kho???n / !dangnhap [mk] ????? ????ng nh???p v??o t??i kho???n / !doimk ????? ????? ?????i m???t kh???u / !dangxuat ????? ????ng xu???t t??i kho???n", player.id, 0xffc400, "bold", 0); 
	whisper(" L??U ??: N???u b???n kh??ng ????ng nh???p v??o t??i kho???n th?? b???n s??? kh??ng ???????c t??nh ghi b??n, th???ng, ki???n t???o,... v??o t??i kho???n c???a b???n!", player.id, 0xffc400, "bold", 0); 
	});
                       
	ids[player.id] = player.name;
	displayAdminMessage();
	//checkPlayerRank(player);

	sleep(150).then(() => {
		var players = room.getPlayerList();
		for(var i=0; i<players.length; i++) {
		for(var j=0; j<i; j++) {
			if(players[i].name == players[j].name){
			room.kickPlayer(players[i].id,"Tr??ng t??n, vui l??ng ?????t t??n kh??c.",false);
			}
		}
		}
		/*players = room.getPlayerList();
		for (i = 0; i < players.length-1; i++){
			if (player.name == players[i].name){
				room.kickPlayer(player.id,"Tr??ng t??n, vui l??ng ?????t t??n kh??c.",false);
			}
		}*/
	});
	sleep(500).then(() => {
		autoAdmin(player);
	});
	sleep(1500).then(() => {
		kickname(player);
	})
}


var authArray = [];
var playersAll = [];
room.onPlayerLeave = function(player) {
	
/*	playerList[player.id - 1].isInTheRoom = false;
    var playerObject = { auth: playerList[player.id - 1].auth, conn: playerList[player.id - 1].conn, name: player.name, id: player.id, goals: JSON.parse(localStorage.getItem(playerList[player.id - 1].auth)).goals, assists: JSON.parse(localStorage.getItem(playerList[player.id - 1].auth)).assists, matchgoals: 0, matchassists: 0, banthang: 0, isInTheRoom: false };*/
   // localStorage.setItem(playerList[player.id - 1].auth, JSON.stringify(playerObject));
	if (AccountsObject[PlayerObject[player.id].conn]) {
		AccountsObject[PlayerObject[player.id].conn].confirm = false;
		//AccountsObject[PlayerObject[player.id].conn].banthang = playerList[player.name].ghiban;
		Request.put();
		let index = dadangnhap.indexOf(player.id);
		if (index > -1) {
			sleep(100).then(() => {
				dadangnhap.splice(index, 1);
			});
		}
	}
	db.log.splice(f(db.log, 'id', player.id), 1);
	delete PlayerObject[player.id];
	/*var indicator = playerid.indexOf(player.id);
    playerid.splice(indicator,1);
    var a = wait_red.indexOf(player.id);
    wait_red.splice(a,1);
    var b = wait_blue.indexOf(player.id);
    wait_blue.splice(b,1);

	if (wait_red != null) {
		for(var i=0; i<playerid.length; i++) {
			if (playerid[i] != undefined && wait_red[i] != undefined) {
				room.setPlayerTeam(i,1);
				var indicator = wait_red.indexOf(i);
				wait_red.splice(indicator,1);
			}
		}
	}
	if (wait_blue != null) {
		for(var i=0; i<playerid.length; i++) {
			if (playerid[i] != undefined && wait_blue[i] != undefined) {
				room.setPlayerTeam(i,2);
				var indicator = wait_blue.indexOf(I);
				wait_blue.splice(indicator,1);
			}
		}
	}*/
	updateTeams();
	displayAdminMessage();
	setActivity(player, 0);
	/*sendAntiFake("\n?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
    + "\n```????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" 
    + `\n     Ng?????i R???i Tr???n: ` + `???${player.name}???`
    + `\n     ID Trong Tr???n:  ???${player.id}???`
    + `\n     M?? Antifake: ???${authArray[player.id].auth}???`
    + `\n     Ng??y/ Gi???: ???${getDate()}???`
    + `\n     Token: ???${authArray[player.id].conn}??? `
    + `\n     ???????ng D???n Ph??ng ?????u: ???${roomLink}???`
    + "\n????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????```"
    + "\n?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")*/
	console.log(player.name + " ???? r???i kh???i ph??ng");

	let index = superAdmins.indexOf(player.id);
	if (index > -1) {
		sleep(100).then(() => {
			superAdmins.splice(index, 1);
		});
	}
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
	if (byPlayer != null) {
		if (changedPlayer.id != byPlayer.id) {
			if (superAdmins.indexOf(changedPlayer.id) > -1) {
				room.kickPlayer(byPlayer.id, "B???n kh??ng th??? x??a quy???n Super Admin", false);
				room.setPlayerAdmin(changedPlayer.id, true);
			}
		}
		else {
			if (changedPlayer.admin == false) {
				let index = superAdmins.indexOf(changedPlayer.id);
				if (index > -1) {
				  superAdmins.splice(index, 1);
				}
			}
		}
	}
}
function thoigian(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2,'0'),
    mes=(data.getMonth()+1).toString().padStart(2,'0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2,'0'),
    minutos=data.getMinutes().toString().padStart(2,'0');
    return `Ng??y ${dia} th??ng ${mes} n??m ${ano} - ${horas} gi??? ${minutos} ph??t`;
}
function getDate(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2,'0'),
    mes=(data.getMonth()+1).toString().padStart(2,'0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2,'0'),
    minutos=data.getMinutes().toString().padStart(2,'0');
    return `${dia}-${mes}-${ano}-${horas}h${minutos}m`;
}

function getLastToucher(){
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    if(roomObject.lastTeamTouched != 0) roomObject.lastTeamTouched == 1 ? roomObject.possession.red++ : roomObject.possession.blue++;
    if(ballPosition.x != 0) ballPosition.x < 0 ? roomObject.activity.red++ : roomObject.activity.blue++;
    for(var i=0; i<players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < roomObject.triggerDistance) {
                if(roomObject.lastPlayerTouched == undefined || (roomObject.lastPlayerTouched!=undefined && roomObject.lastPlayerTouched.id!=players[i].id)){
                    if(roomObject.lastTeamTouched==players[i].team){
                        roomObject.assistingTouch = roomObject.lastPlayerTouched;
                    }
                    else roomObject.assistingTouch = undefined;
                }
                roomObject.lastTeamTouched = players[i].team;
                roomObject.previousPlayerTouched == roomObject.lastPlayerTouched;
                roomObject.lastPlayerTouched = players[i];
            }
        }
    }
    return roomObject.lastPlayerTouched;
}


function getPlayersStats(scores){
	var red = room.getPlayerList().filter((player) => player.team == 1);
	var blue = room.getPlayerList().filter((player) => player.team == 2);
	spec = room.getPlayerList().filter((player) => player.team == 0);
	var redkim = red.map(function (player) {
		return player.name;
	}).join("\n");

	var bluekim = blue.map(function (player) {
		return player.name;
	}).join("\n");

	var speckim = spec.map(function (player) {
		return player.name;
	}).join("\n")

	stats = goals.map((goal) => { return `${goal.Player}, ${goal.Assist} ???${goal.Time} | ${goal.Scores}` }).join("\n");
    tongthevang = bithevang.map((thevang) => { return `${thevang.Player} ???${thevang.Time} | ${thevang.Reason}` }).join("\n");
    tongthedo = bithedo.map((thedo) => { return `${thedo.Player} ???${thedo.Time} | ${thedo.Reason}` }).join("\n");
	var randomColor = Math.floor(Math.random() * 16777215);
	getGameStats = {
		"embeds": [{
		"type": "rich", "title": "???????????????? ???????????????????????????? ???????????????? ???????????????????????? ???????????????????????????? ????", "description": " ??????????????????????????????????????????????????????????????????????????????????????????????????????", "color": randomColor, "fields": [
			{
				"name": `Th??ng Tin T???n C??ng:`,
				"value": '\n```c\n????T??? L??? ??p ?????o:' + ` ${(100 * roomObject.possession.red / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}% ???? - ???? ${(100 * roomObject.possession.blue / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}%\n` + '\n```\n\n',
				"inline": false
			},
			{
				"name": `Th??ng Tin Ph??ng Th???:`,
				"value": '\n```c\n???? Ph??ng Th???:' + ` ${(100 * roomObject.activity.red / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}% ???? - ???? ${(100 * roomObject.activity.blue / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}%\n` + '\n```\n\n',
				"inline": false
			},
			{
			"name": `T???ng T??? S???: `,
			"value": "\n```c\n" + `${game.redScore} ???? - ???? ${game.blueScore}` + " \n```\n\n",
			"inline": true
			},
			{
			"name": `Th???i Gian: `,
			"value": "\n```c\n" + `[${gameTime} Ph??t]` + " \n```\n\n",
			"inline": true
			},
			{
			"name": `??????????????????????????????????????????????????????????????????????????????????????????????????????`,
			"value": "\n```c\n?????? Ng?????i Ghi B??n:" + "\n" + `${stats}` + " \n```\n\n",
			"inline": false
			},
			{
			"name": "?????????????????????????????????",
			"value": "\n```c\n???? ??????????????????:" + "\n\n" + redkim.toString().replace(",", "\n") + " \n```\n\n",
			"inline": true
			},
			{
			"name": "?????????????????????????????????",
			"value": "\n```c\n???? ????u?????????????:" + "\n\n" + bluekim.toString().replace(",", "\n") + " \n```\n\n",
			"inline": true
			},
			{
			"name": "?????????????????????????????????",
			"value": "\n```c\n???? s??????c:" + "\n\n" + speckim.toString().replace(",", "\n") + " \n```\n\n",
			"inline": true
			},
			{
			"name": `??????????????????????????????????????????????????????????????????????????????????????????????????????`,
			"value": "\n```c\n???? Th??? V??ng:" + "\n" + `${tongthevang}` + " \n```\n\n",
			"inline": false
			},
			{
			"name": `??????????????????????????????????????????????????????????????????????????????????????????????????????`,
			"value": "\n```c\n???? Th??? ?????:" + "\n" + `${tongthedo}` + " \n```\n\n",
			"inline": false
			}
		], timestamp: new Date().toISOString()
		}]
	};

	return getGameStats;
	}


	function pointDistance(p1,p2){
		return Math.hypot(p1.x-p2.x,p1.y-p2.y);
	}

	function sendDiscordWebhook(scores){
		const form = new FormData();
		// Voc?? pode fazer upload de at?? 8 MB de arquivo via webhook.
		// Argumento
		// Execu????o [ opera????o, nome, tipo ]
		form.append(
		"arquivo",
		new File([room.stopRecording()],
			`HBReplay-${getDate()}.hbr2`,
			{ type: "text/plain" }
		)
		);

		// (opcional)
		//  form.append("content", 'deneme');
		form.append("payload_json", JSON.stringify(getPlayersStats(scores)));
	
		// Enviar via webhook.
		const webhook = new XMLHttpRequest();
		webhook.open("POST", webhooks.replay);
		webhook.send(form);
	}

	var possession = [0, 0];
	var actionZoneHalf = [0, 0];
	room.onGameStart = function(byPlayer) {
        if(roomObject.lastTeamTouched != 0 || roomObject.lastPlayerTouched != undefined || roomObject.previousPlayerTouched != undefined || roomObject.assistingTouch != undefined){
			roomObject.lastTeamTouched = 0,
			roomObject.lastPlayerTouched = undefined,
			roomObject.previousPlayerTouched = undefined,
			roomObject.assistingTouch = undefined
		}
		if(roomObject.activity.red != 0 || roomObject.activity.blue != 0 || roomObject.possession.red != 0 || roomObject.possession.blue != 0){
			roomObject.activity.red = 0;
			roomObject.activity.blue = 0;
			roomObject.possession.red = 0;
			roomObject.possession.blue = 0;
		}
        goals = [];
        bithevang = [];
        bithedo = [];
        tookasize = {};

        if (map == "RSR") {
	 let x = getRndInteger(1, 7);
                if (x== 1 ) {
                    announce( "????:"+"????BARCELONA V???i REAL MARID");  
                    room.setTeamColors(1, 0, 0xFFEA29, [0x1100FF,0x1100FF,0xFF0000]); //BARCA
                    room.setTeamColors(2, 130, 0xFFFFFF, [0xFFFFFF,0x004477,0xFFFFFF]); //REALMARID
                }	
                else if (x == 2){
                    announce( "????:"+"????AC MILAN V???i INTER MILAN");  
                    room.setTeamColors(1, 0, 0xFFFFFF, [0xFF0000, 0x000000, 0xFF0000]); //AC ml
                    room.setTeamColors(2, 0, 0xFFFFFF, [0x002AFF, 0x000000,0x001AFF]); //INTER ml
                }
                else if (x == 3) {
                    announce( "????:"+"????PARIS SAINTGERMAIN V???i LIVER POOR");  
                    room.setTeamColors(1, 180, 0x000000, [0xFFFFFF, 0xF7B3FF, 0xFFFFFF]); //PSG
                    room.setTeamColors(2, 90, 0xFFFFFF, [0xFF0000, 0xC40000, 0x9F0000]); //LIVERPOOR
                }
                else if ( x == 4) {
                    announce( "????:"+"????MANCHESTER UNITED V???i AC MILAN");  
                    room.setTeamColors(1, 37, 0xFFFFFF, [0xFF0000, 0xBF0000, 0xAB0000]);  //MU
                    room.setTeamColors(2, 90, 0xFF0313, [0xFFFFFF, 0xBFBFBF, 0xABABAB]);  //AC MILAN
                }
                else if (x == 5) {
                    announce( "????:"+"????REAL MARID V???i LIVER POOR");  
                    room.setTeamColors(1, 0, 0x001AFF, [0xFFFFFF]); //REAL
                    room.setTeamColors(2, 180, 0xFFFFFF, [0xEB0000, 0xBF0000, 0xD91500]); //LIVERPOOR
                }
                else if (x==6) {
                    announce( "????:"+"????CHELSEA V???i MANCHESTER CITY");  
                    room.setTeamColors(1, 180, 0xFFFFFF, [0x000BAB, 0x000599, 0x001A9E]); //CHELSEA
                    room.setTeamColors(2, 180, 0xFFFFFF, [0x21CBFF, 0x23C1E8, 0x22C9F2]); //MANCITY
                }
				room.startRecording();
                room.setDiscProperties(0, {invMass: 1.05});
                if (byPlayer == null) {
                game = new Game();	
                announce( "????:"+"Tr???n ?????u s??? k???t th??c sau " + gameTime + " ph??t");
                announce( "????:"+"Ghi !size ????? ch???n k??ch th?????c");
                announce("????:Tr???n ?????u ??ang ???????c ghi l???i.");
            }
            else {
                if (room.getScores().timeLimit != 0) {
                    gameTime = room.getScores().timeLimit / 60;
                }
                else {
                    gameTime = 10;
                }
                lastTeamTouched = Team.SPECTATORS;
                countAFK = true;
                possession = [0, 0];
                actionZoneHalf = [0, 0];
                gameState = State.PLAY;
                playSituation = Situation.KICKOFF;
                activePlay = true;
                lastPlayersTouched = [null, null];
    
                assistingTouch = undefined;
                lastPlayerTouched = undefined;
				room.getPlayerList().forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;playerList[p.id - 1].warn1 = 0});
                //randomUniforms();
                room.stopGame();
                room.setTimeLimit(0);			
                room.startGame();
               
                room.setDiscProperties(0, {color: ballcolor});
        }
    }
}

var scores = [];
var possession = [0, 0];
room.onGameStop = function(byPlayer) {
	if (map == "RSR") {
		if (byPlayer != null) {
			gameState = State.STOP;
			possession = [0, 0];
     		check();
			room.setTimeLimit(gameTime);
			gk = [init, init];
			kickOff = false;
			hasFinished = false;
		assistingTouch = undefined;
		lastPlayerTouched = undefined;
		if (gameState == State.STOP) {
			sendDiscordWebhook(scores);
			announce("Th??ng Tin Tr???n ?????u ???? ???????c G???i!");
		}
		else if (gameState == State.PLAY) {
			whisper("Tr???n ?????u Ch??a C?? H???i K???t",byPlayer.id);
		}
		check();
		room.getPlayerList().forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;playerList[p.id - 1].warn1 = 0});
        }
    }
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {	
	if (map == "RSR") {
		game.rsTouchTeam = player.team;
		game.updateLastKicker(player.id, player.name, player.team);
		lastTeamTouched = player.team;
        roomObject.lastPlayerTouched = player;
		roomObject.lastTeamTouched = player.team;
		
		//=========== POWERSHOT CODE ===========
		if (powerShotMode == true) {
			if (game.powershotCounter > 70 && game.powershotCounter < 150) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/110 , ygravity: room.getPlayerDiscProperties(player.id).yspeed/17*1});
				game.rsSwingTimer = 1000000;
				room.sendAnnouncement( "????:  "+ player.name + " ???? th???c hi???n m???t c?? s??t C", player.pm, 0x33dddd, "bold", 1);
				sleep(700).then(() => {
					room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
					});			
			}
			else {
				if (game.powershotCounter > 150 && game.powershotCounter < 250) {
					room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/100 , ygravity: room.getPlayerDiscProperties(player.id).yspeed/15*1});
					game.rsSwingTimer = 1000000;
					room.sendAnnouncement( "????:  "+ player.name + " ???? th???c hi???n m???t c?? s??t B", player.pm, 0x33dddd, "bold", 1);
					sleep(700).then(() => {
						room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
						});			
			}
			else {
				if (game.powershotCounter > 250 && game.powershotCounter < 450) {
					room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/90 , ygravity: room.getPlayerDiscProperties(player.id).yspeed/14*1});
					game.rsSwingTimer = 1000000;
					room.sendAnnouncement( "????:  "+ player.name + " ???? th???c hi???n m???t c?? s??t A", player.pm, 0x33dddd, "bold", 1);
					sleep(700).then(() => {
						room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
						});			
			}
			else {
				if (game.powershotCounter > 400 && game.powershotCounter < 1000) {
					room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/50 , ygravity: room.getPlayerDiscProperties(player.id).yspeed/10*1});
					game.rsSwingTimer = 1000000;
					room.sendAnnouncement( "????:  "+ player.name + " ???? th???c hi???n m???t c?? s??t S", player.pm, 0x33dddd, "bold", 1);
					sleep(700).then(() => {
						room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
						});			
			} } } } 
				game.powershotCounter = 0;
				game.powershotID = 0;
				game.powershotTrigger = false;
				if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
					room.setDiscProperties(0, {color: ballcolor ,invMass: 1.05});
				}
			}
		//=========== POWERSHOT CODE ===========
		
		if (game.rsReady == true) {
			var players = room.getPlayerList().filter((player) => player.team != 0);
			players.forEach(function(player) {			
				if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3) {
					room.setPlayerDiscProperties(player.id, {invMass: 0.3});
				}
			});
		}
			
		if (game.rsActive == false && game.rsReady == true && (game.rsCorner == true || game.rsGoalKick == true)) { // make game active on kick from CK/GK
			game.boosterState = true;
			
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(1, {x: 2000, y: 2000 });
			room.setDiscProperties(2, {x: 2000, y: 2000 });
			room.setDiscProperties(0, {color: ballcolor});
			game.rsTimer = 1000000;
			game.warningCount++;	
			
			// set gravity for real soccer corners/goalkicks
			if (game.rsCorner == true) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/16*1, ygravity: room.getPlayerDiscProperties(player.id).yspeed/14*1});
			}	
			if (game.rsGoalKick == true) {			
				room.setDiscProperties(0, {xgravity: 0, ygravity: room.getPlayerDiscProperties(player.id).yspeed/20*1});		
			}

			
			game.rsCorner = false;
			game.rsGoalKick = false;
			game.outStatus = "";		
		}		
		
		if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 		
			game.outStatus = "";
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(0, {color: ballcolor});
			game.rsTimer = 1000000;
			game.warningCount++;			
		}	
	}
}
// Chat Resutls 1.0

	function sendDiscord(username, content) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', webhooks.chat);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				//console.log(xhr.response);
			}
		};
		var data = JSON.stringify({ username: username, content: content });
	
			xhr.send(data);
		// xhr.abort();
		return false;
	}

	function sendAntiFake(message) {

		var request = new XMLHttpRequest();
		request.open("POST", webhooks.antifake);
	
		request.setRequestHeader('Content-type', 'application/json');
	
		var params = {
			avatar_url: 'https://cdn.discordapp.com/avatars/1011096144518066226/7f97dfc6783d269cdbb99b346818a762.webp?size=128',
			username: '???? ????????????????-???????????????????? | ???????????????? ???????????????????????? ???????? ???????? ???? ',
			content: message
		};
	
		request.send(JSON.stringify(params));
	}

	function sendlinkroom(message) {

		var request = new XMLHttpRequest();
		request.open("POST", webhooks.autolink);
	
		request.setRequestHeader('Content-type', 'application/json');
	
		var params = {
			avatar_url: 'https://cdn.discordapp.com/avatars/1011096144518066226/7f97dfc6783d269cdbb99b346818a762.webp?size=128',
			username: '???? ???????????????? ???????????????? | ???????????????? ???????????????????????? ???????? ????',
			content: message
		};
	
		request.send(JSON.stringify(params));
	}

	function sendChatLog(username, message, player=false, team) {
		if(player!=false && player.admin==true){
		username = "`"+username+"??? REF ???`";
		}
		var teams = (player.team === 1 ? "\ ???? ?????????????????? " : player.team === 2 ? "\ ???? ????u????????????? " : "\???? s??????c ")

		if(badword.includes(message.toLowerCase())){
			return false;
		}
		else {
			if(message.toLowerCase().startsWith("!")){
				return false;
		}
			else{
		sendDiscord("", "??? ID: " + player.id +  ' ??? ' + "(" + teams + " ) " + '**' + username + ':** `' + message.replace("@", " ") + '`');
			}
		}
	}



	// End Chat Results 1.0

	// Yellow Card, Red Card By Bav x Zinx


//----------------- END -----------------------
room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
	if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
		room.kickPlayer(byPlayer.id, "B???n kh??ng th??? kick/ban Admin", true);
		room.clearBans();
	}
}

//------------------ Function ------------------
function checkcard() {
	for(var i=0; i<playerList.length; i++){
		if (playerList[i].thevang == 2) {
			announce(playerList[i].name + " ???? B??? T?????c Quy???n Thi ?????u V?? B??? 2 Th??? V??ng C??ng Tr???n!");
            room.setPlayerTeam(playerList[i].id, 0);
			if (treochan.indexOf(playerList[i].id) === -1) {
				treochan.push(playerList[i].id);
			}
		}
	}
	for(var i=0; i<playerList.length; i++){
		if (playerList[i].thedo == 1) {
			announce(playerList[i].name + " ???? B??? T?????c Quy???n Thi ?????u V?? B??? Th??? ?????!");
            room.setPlayerTeam(playerList[i].id, 0);
			if (treochan.indexOf(playerList[i].id) === -1) {
				treochan.push(playerList[i].id);
			}
		}
	}
}

function check() { // C???m Th???ng Lol B??? Th??? V??o S??n :v
	for(var i=0; i<playerList.length; i++){
		let index = treochan.indexOf(playerList[i].id);
		if (index > -1) {
			sleep(100).then(() => {
				treochan.splice(index, 1);
			});
		}
	}
}



// Auto Annouce

var DiscordInterval = 500000;

function discord(){
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0x33D4FF, "small", 2);
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0x33D4FF, "small", 0);
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0x8942FF, "small", 0);
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0x8942FF, "small", 0);
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0xFF24FD, "small", 0);
    whisper("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", null, 0xFF24FD, "small", 0);
    whisper("??????????????????????????????????????????Link: https://discord.gg/kKByzCgg67???????????????", null, 0x76FF1F, "small", 0);
}

var sendDiscordInterval = setInterval(function(){discord();},DiscordInterval);

//------------------ End

//----------------

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			whisper("N???u b???n kh??ng di chuy???n ho???c chat sau " + Math.floor(afkLimit / 3) + " gi??y, b???n s??? ???????c chuy???n v??o d??? b???!", extendedP[i][eP.ID], 0x8b0000, "bold");
		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
			room.setPlayerTeam(extendedP[i][eP.ID], 0);
			announce(room.getPlayer(extendedP[i][eP.ID]).name + " ???? ???????c chuy???n v??o d??? b??? do AFK!");
			whisper("B???n ???? ???????c chuy???n v??o d??? b??? do AFK!", extendedP[i][eP.ID], 0xffffff, "normal")
		}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

/*function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
} */

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}


//----------------- END ----------------------------------------------
room.onPlayerChat = function(player, message) {
    const messageSplit = message.split(" ");

    if (Object.keys(Commands).map(command=> `${prefixString}${command}`).includes(messageSplit[0].toLowerCase())) {
        Commands[messageSplit[0].slice(1)](player, messageSplit[1]);
        return false;
    }
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	var players = room.getPlayerList();
	console.log("[" + player.id + "]" + player.name + ": " + message);
	sendChatLog(player.name, message, player);
	//spamFilter(player, message);
	if (message.startsWith("!")) {
		message = message.substr(1);
		let args = message.split(" ");
			if (args[0] == "admin" && args.length == 1 && allowPublicAdmin == true) {
				if (isAdminPresent() == false) {
					room.setPlayerAdmin(player.id, true);
				}
				else {
					whisper("???? c?? Admin ho???c l???nh !admin kh??ng ???????c ph??p!", player.id);
				}
			}
			else if (args[0] == "admin" && args.length == 2) {
				if (args[1] == superAdminCode) {
					room.setPlayerAdmin(player.id, true);
					if (superAdmins.indexOf(player.id) === -1) {
						superAdmins.push(player.id);
					}
					announce(player.name + " ???? ???????c trao quy???n Super Admin");
				}
			}
			else if (args[0] == "role") {
				if(player.admin == true){
					if (args[1] == "pro") {
						var players = room.getPlayerList();
						var id = parseInt(message.split(" ")[2]);
						var p = players.find(x => x.id == id);
						
						if(p){
						if(p.id == player.id){
							room.sendAnnouncement("B???n kh??ng th??? ????a role cho ch??nh m??nh!", player.id, 0xFFFFFF, "bold");
						}
						else{
							if (rolePro.indexOf(p.id) === -1) {
								rolePro.push(p.id);
							}
						}
						}
						else{
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
						}
						return false;
						}
					else if (args[1] == "pro2") {
							var players = room.getPlayerList();
							var id = parseInt(message.split(" ")[2]);
							var p = players.find(x => x.id == id);
						
							if(p){
							if(p.id == player.id){
								room.sendAnnouncement("B???n kh??ng th??? ????a role cho ch??nh m??nh!", player.id, 0xFFFFFF, "bold");
							}
							else{
							if (roleVipPro.indexOf(p.id) === -1) {
									roleVipPro.push(p.id);
								}
							}
							}
							else{
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
						}
						return false;		
					}
					else if (args[1] == "pro3") {
						var players = room.getPlayerList();
						var id = parseInt(message.split(" ")[2]);
						var p = players.find(x => x.id == id);
					
						if(p){
						if(p.id == player.id){
							room.sendAnnouncement("B???n kh??ng th??? ????a role cho ch??nh m??nh!", player.id, 0xFFFFFF, "bold");
						}
						else{
						if (roleVipPro2.indexOf(p.id) === -1) {
								roleVipPro2.push(p.id);
							}
						}
						}
						else{
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
					}
					return false;			
					}
					else if (args[1] == "he") {
							var players = room.getPlayerList();
							var id = parseInt(message.split(" ")[2]);
							var p = players.find(x => x.id == id);
					
							if(p){
							if(p.id == player.id){
								room.sendAnnouncement("B???n kh??ng th??? ????a role cho ch??nh m??nh!", player.id, 0xFFFFFF, "bold");
							}
							else{
								if (roleToxic.indexOf(p.id) === -1) {
									roleToxic.push(p.id);
								}
							}
							}
							else{
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
							}
					
							return false;
					}
					else if (player.admin == false){
						room.sendAnnouncement("B???n kh??ng c?? quy???n s??? d???ng l???nh n??y!",player.id,0xFF0000,"bold",2);
					}	
				}
			}
			else if (args[0] == "rolehelp") {
				if (player.admin) {
					whisper("S??? d???ng: !role [pro/pro2/pro3/he] [id]",player.id);
				}
			}
			else if (args[0] == "tbchat") {
				if (player.admin) {
					msg = message.substr(6).trim();
					announce("????: " + msg, player.pm, 0x3fed09, 'bold', 1);
				}
			}
			else if (args[0] == "banlist" && args.length == 1) {
				if (banList.length == 0) {
					whisper("Kh??ng c?? ng?????i ch??i n??o trong danh s??ch b??? ban!", player.id, null, 0x8b0000);
					return false;
				}
				var cstm = "Danh s??ch ng?????i b??? ban:\n";
				for (var i = 0; i < banList.length; i++) {
					if (140 - cstm.length < ("[ID: " + (banList[i][1]) + "] - " + banList[i][0] + "\n").length) {
						whisper(cstm, player.id, 0xffd700);
						cstm = "... ";
					}
					cstm += "[ID: " + (banList[i][1]) + "] - " + banList[i][0] + "\n";
				}
				cstm = cstm.substring(0, cstm.length - 2);
				cstm += " ";
				whisper(cstm, player.id, 0xffd700);
			}
			else if (args[0] == "gkhelp") {
				whisper("C???u th??? g???n goal c???a c??? hai ?????i s??? ???????c ch???n l??m th??? m??n (nh???p !gk n???u b??? ch???n sai).", player.id, null, "normal");
			}
			else if (args[0] == "gk") {
				gkFun(player);
				whisper("B???n ???? ???????c ch???n l??m GK.", player.id, null, "normal");
			}
			else if (args[0] == "poss" && args.length == 1) {
				if (gameState == State.PLAY){
					announce(`???? T??? l??? ki???m so??t b??ng: ???? ${(100 * roomObject.possession.red / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}% - ${(100 * roomObject.possession.blue / (roomObject.possession.red + roomObject.possession.blue)).toPrecision(3)}% ???? | ???? T??? l??? b??ng trong khu v???c: ???? ${(100 * roomObject.activity.red / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}% - ${(100 * roomObject.activity.blue / (roomObject.activity.red + roomObject.activity.blue)).toPrecision(3)}% ????`);
				}
				else if (gameState == State.STOP){
					whisper("Tr???n ?????u ch??a b???t ?????u!", player.id, 0xff0000, "normal");
				}
			}	
			else if (args[0] == "teamred" && args.length == 1) {
				if (dadangnhap.indexOf(p.id) > -1) {
				updateTeams();
				if (treochan.indexOf(player.id) > -1){
					whisper("B???n kh??ng th??? v??o!",player.id)
				}
				else if (player.team == 1) {
					whisper("B???n ???? ??? b??n ?????i ????!",player.id);
				}
				else if (teamR.length == 7) {
					whisper("?????i ???? ???? ????? ng?????i! (T???i ??a 7 ng?????i trong m???i ?????i)", player.id);
					/*whisper("B???n ???? ???????c th??m v??o danh s??ch ch???",player.id);
					wait_red.push(player.id); 
					var b = wait_blue.indexOf(player.id);
					wait_blue.splice(b,1);*/
				}
				else {
					room.setPlayerTeam(player.id, 1);
					whisper("B???n ???? ???????c chuy???n sang ?????i ????", player.id);
				}
			} else {
				whisper("???? Ch??a ????ng Nh???p !",player.id, 0xFFFFFF, "bold", 2)
			}
		} 
			else if (args[0] == "teamblue" && args.length == 1) {
				if (dadangnhap.indexOf(p.id) > -1) {
				updateTeams();
				if (treochan.indexOf(player.id) > -1){
					whisper("B???n kh??ng th??? v??o!",player.id)
				}
				else if (player.team == 2) {
					whisper("B???n ???? ??? b??n ?????i ????!",player.id);
				}
				else if (teamB.length == 7) {
					whisper("?????i ???? ???? ????? ng?????i! (T???i ??a 7 ng?????i trong m???i ?????i)", player.id)
					/*if (wait_blue.includes(player.id) || wait_red.includes(player.id)) {
						whisper("B???n ???? ???????c th??m v??o danh s??ch ch???",player.id);
					} 
					else { 
						wait_blue.push(player.id); 
						let b = wait_red.indexOf(player.id);
						wait_red.splice(b,1);
					}*/
				}
				else {
					room.setPlayerTeam(player.id, 2);
					whisper("B???n ???? ???????c chuy???n sang ?????i ????", player.id);
				}
			} else {
				whisper("???? Ch??a ????ng Nh???p !",player.id, 0xFFFFFF, "bold", 2)
			}
		}
			
			else if (args[0] == "spec" && args.length == 1) {
				if (player.team == 0) {
					whisper("B???n ???? v??o d??? b???!",player.id);
				}
				room.setPlayerTeam(player.id, 0);
				whisper("B???n ???? ???????c chuy???n v??o d??? b???", player.id);
			}
			else if (args[0] == "topgoalreset" && args.length == 1) {
				if (player.admin == true) {
					overall = [];
					room.getPlayerList().filter(p => playerList[p.id - 1].id).forEach(p => { playerList[p.id - 1].banthang = 0; });
				}
			}
			else if (args[0] == "sech" && args.length == 1) {
				room.kickPlayer(player.id, "SECH", false);
			}
			else if (args[0] == "resetdoi" && args.length == 1) {
				if (player.admin) {
					if (resetdoi == true) {
						resetTeam();
					}
					else {
						whisper("Reset ?????i ???? b??? t???t!", player.id, null, 0xFF0000)
					}
				}
			}
			else if (args[0] == "ast" && args.length == 1) {
				if (player.admin) {
					if (autoStart == true) {
						autoStart = false;
						whisper("AutoStart ???? ???????c t???t ", player.id, null, 0xFF0000);
					}
					else {
						autoStart = true;
						announce("AutoStart ???? ???????c b???t ", player.id, null, 0x00FF00);
					}
				}
			}
			else if (args[0] == "testcurve" && args.length == 1) {
				if (player.admin) {
					if (testcurve == false) {
						testcurve = true;
						announce("TestCurve ???? ???????c b???t b???i " + player.name, null, 0x00FF00);
					}
					else {
						testcurve = false;
						announce("TestCurve ???? ???????c t???t b???i " + player.name, null, 0xFF0000);
					}
				}
			}
			else if (args[0] == "autoswap" && args.length == 1) {
				if (player.admin) {
					if (autoswap == true) {
						autoswap = false;
						whisper("autoswap ???? ???????c t???t ", player.id);
					}
					else {
						autoswap = true;
						whisper("autoswap ???? ???????c b???t ", player.id);
					}
				}
			}
			else if (args[0] == "ids" && args.length == 1) {
					var players = room.getPlayerList();
					var p = players.find(x => x.id == id);
	
					room.sendAnnouncement("Danh s??ch id ng?????i ch??i:\n" + players.map(x => "[ID: " + x.id + "] - " + x.name).join("\n"),player.id,0x00ffff,"normal",2);
			}
			else if ((args[0] == "reset" || args[0] == "rst") && player.admin) { //ps
				if (resetdoi == true) {
					resetdoi = false;
					announce("ResetTeam ???? ???????c t???t b???i " + player.name, null, 0xFF0000);
				}
				else {
					resetdoi = true;
					announce("ResetTeam ???? ???????c b???t b???i " + player.name, null, 0x00FF00);
				}
			}	
			else if (args[0] == "mainskin" && args.length == 1 && player.admin) { 
				room.setTeamColors(1, 47, 0xFFFFFF, [0x8F0000, 0x630000, 0x3B0000]);
				room.setTeamColors(2, 47, 0xFFFFFF, [0x0029BF, 0x001D85, 0x040057]);
			}
			else if (args[0] == "clearbans") {
				if (player.admin) {
					room.clearBans();
					announce("Danh s??ch ban ???? ???????c clear b???i " + player.name);
					banList = [];
				}
				else {
					whisper("L???nh ch??? d??nh cho Admin", player.id);
				}
			}
			else if (args[0] == "color" && player.admin) {
				if (args[1] == "reset") {
					ballcolor = "0xFFA326";
					colorball = "FFA326";
					room.setDiscProperties(0, {color: "0xFFFFFF"});
				}
				else if (args[1] == "1") {
					ballcolor = "0xf5deb3";
					colorball = "f5deb3";
					room.setDiscProperties(0, {color: "0xf5deb3"});
				}
				else if (args[1] == "2") {
					ballcolor = "0xadff2f";
					colorball = "adff2f";
					room.setDiscProperties(0, {color: "0xadff2f"});
				}			
				else if (args[1] == "3") {
					ballcolor = "0xe0ffff";
					colorball = "e0ffff";
					room.setDiscProperties(0, {color: "0xe0ffff"});
				}		
				else if (args[1] == "4") {
					ballcolor = "0xd8bfd8";
					colorball = "d8bfd8";
					room.setDiscProperties(0, {color: "0xd8bfd8"});
				}		
				else if (args[1] == "5") {
					ballcolor = "0xffb6c1";
					colorball = "ffb6c1";
					room.setDiscProperties(0, {color: "0xffb6c1"});
				}	
				else if (args[1] == "6") {
					ballcolor = "0xd3d3d3";
					colorball = "d3d3d3";
					room.setDiscProperties(0, {color: "0xd3d3d3"});
					//announce(player.name + " ???? thay ?????i m??u b??ng!");
				}
			}
			//----------------------------------------------------------------------------------------
			else if (args[0] == "maubong") {	
				if (args[1] == "mauxam") {
					if(AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf("mauxam") > -1)
					AccountsObject[PlayerObject[player.id].conn].playerballcolor = "mauxam";
					else{
						whisper("B???n ch??a s??? h???u m??u b??ng n??y!",player.id)
					}
				}
				else if(args[1] == "maula") {
					if(AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf("maula") > -1)
						AccountsObject[PlayerObject[player.id].conn].playerballcolor = "maula" 
					else{
						whisper("B???n ch??a s??? h???u m??u b??ng n??y!",player.id)
					}
				}
				else if(args[1] == "mauxanh") {
					if(AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf("mauxanh") > -1)
						AccountsObject[PlayerObject[player.id].conn].playerballcolor = "mauxanh" 
					else{
						whisper("B???n ch??a s??? h???u m??u b??ng n??y!",player.id)
					}
				}
				else if(args[1] == "mauhong") {
					if(AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf("mauhong") > -1)
						AccountsObject[PlayerObject[player.id].conn].playerballcolor = "mauhong" 
					else{
						whisper("B???n ch??a s??? h???u m??u b??ng n??y!",player.id)
					}
				}
				else {
					var maubong = AccountsObject[PlayerObject[player.id].conn].maubongdamua;
					var maubonghienco = maubong.map(function (maubong) {
						return maubong;
					}).join("\n");
	
				whisper("B???n hi???n c??:\n-" + maubonghienco.toString().replace("\n-"));
				}
			}
			//----------------------------------------------------------------------------------------
			else if (args[0] == "mauchat") {	
				if (args[1] == "maula") {
					if(AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf("maula") > -1)
					AccountsObject[PlayerObject[player.id].conn].mauchatdangdung = "0x7fff00";
					else{
						whisper("B???n ch??a s??? h???u m??u chat n??y!",player.id)
					}
				}
				else if(args[1] == "maulam") {
					if(AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf("maulam") > -1)
						AccountsObject[PlayerObject[player.id].conn].mauchatdangdung = "0x80daeb";
					else{
						whisper("B???n ch??a s??? h???u m??u chat n??y!",player.id)
					}
				}
				else if(args[1] == "mautim") {
					if(AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf("mautim") > -1)
						AccountsObject[PlayerObject[player.id].conn].mauchatdangdung = "0x5218fa";
					else{
						whisper("B???n ch??a s??? h???u m??u chat n??y!",player.id)
					}
				}
				else if(args[1] == "mauvang") {
					if(AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf("mauvang") > -1)
						AccountsObject[PlayerObject[player.id].conn].mauchatdangdung = "0xffdb58"; 
					else{
						whisper("B???n ch??a s??? h???u m??u chat n??y!",player.id)
					}
				}
				else {
					if (AccountsObject[PlayerObject[player.id].conn].mauchatdamua.length == 0) {
						whisper("B???n ch??a s??? h???u m??u chat n??o!", player.id);
						return false; 
					}
					var mauchatdamua = AccountsObject[PlayerObject[player.id].conn].mauchatdamua;
					var mauchathienco = mauchatdamua.map(function (mauchatdamua) {
						return mauchatdamua;
					}).join("\n");
	
				whisper("B???n hi???n c??:\n-" + mauchathienco.toString().replace("\n-"))
				}
			}
			//----------------------------------------------------------------------------------------
			else if (args[0] == "admincode" && player.admin) {
					if (args[1] == "reset") {
						superAdminCode = "khoaxd";
						whisper("???? reset Superadmin code" ,player.id);
					}
					else {
						superAdminCode = args[1];
						whisper("Superadmin code ???? ???????c thay ?????i th??nh " + args[1],player.id);
					}			
			}
			else if (args[0] == "court" && args.length == 1) {
				whisper("M??u n???n hi???n t???i l?? " + mapBGColor);
			}
			else if (args[0] == "court" && args.length == 2 && player.admin) {
				if (room.getScores() == null) {
					if (args[1] == "reset") {
						mapBGColor = "86A578";
						announce("M??u n???n b???n ????? ???????c ?????t l???i b???i " + player.name);
					}
					else {
						mapBGColor = args[1];
						announce("M??u n???n c???a b???n ????? ???????c ?????t th??nh " + args[1] + " b???i " + player.name);
					}
					room.setCustomStadium(realSoccerMap);				
				}
				else {
					whisper("Kh??ng th??? thay ?????i m??u n???n b???n ????? khi tr?? ch??i ??ang di???n ra", player.id);
				}
			}
			else if (args[0] == "swap") {
				if (player.admin) {
					if (args.length == 1) {
						var players = room.getPlayerList().filter((player) => player.id != 0 );
						if ( players.length == 0 ) return false;
						players.forEach(function(player) {	
							if (player.team == 1) {
								room.setPlayerTeam(player.id, 2);
							}
							if (player.team == 2) {
								room.setPlayerTeam(player.id, 1);
							}
						});
						announce("???? C??c ?????i ???? ???????c ho??n ?????i");
					}
				}
				else {
					whisper("L???nh ch??? d??nh cho Admin", player.id);
				}
			}
			else if (args[0] == "setpassword" && player.admin) {
				if (superAdmins.indexOf(player.id) > -1) {
					room.setPassword(args[1]);
					roomPassword = args[1];
					announce("M???t kh???u ???? ???????c thay ?????i b???i " + player.name);
				}
				else {
					whisper("Ch??? Admin m???i c?? th??? thay ?????i m???t kh???u", player.id);
				}
			}
			else if (args[0] == "clearpassword" && player.admin) {
				if (superAdmins.indexOf(player.id) > -1) {
					room.setPassword(null);
					roomPassword = null;
					announce("M???t kh???u ???? ???????c x??a b???i " + player.name);
				}
				else {
					whisper("Ch??? Admin m???i c?? th??? x??a m???t kh???u", player.id);
				}
			}
			else if (args[0] == "ip") {
				fetch('https://api.ipify.org/?format=json')
				.then(results => results.json())
				.then(data => console.log(data.ip/*whisper(` Ip C???a B???n L??: ${data.ip}`,player.name, 0xffffff,"small",2)*/));
				return false;
			}
			else if (args[0] == "rs" && player.admin) {
				if (room.getScores() == null) {
					room.setCustomStadium(realSoccerMap);
				}
				else {
					whisper("Kh??ng th??? thay ?????i map khi tr???n ?????u ??ang di???n ra", player.id);
				}
			}
			else if (args[0] == "hvl" && player.admin) {
				if (room.getScores() == null) {
					room.setCustomStadium(getHaxVietMap());
				}
				else {
					whisper("Kh??ng th??? thay ?????i map khi tr???n ?????u ??ang di???n ra", player.id);
				}
			}
			else if (args[0] == "rr" && player.admin) {
				gk = [init, init];
				kickOff = false;
				hasFinished = false;
				countAFK = true;
				room.stopGame();
				room.startGame();
				room.setDiscProperties(0, {color: ballcolor});
			}
			//else if (args[0] == "randkit" && args.length == 1 && player.admin) { 
			//	randomUniforms();
			//}
			else if (args[0] == "move" && player.admin) {
				movePlayersToTeams(player,message);
			}
			else if (args[0] == "bb") {
				room.kickPlayer(player.id, "Bye", false);
			}	
			else if (args[0] == "roomsech") {
				room.kickPlayer(player.id, "Room sech vcl", false);
			}	
			else if ((args[0] == "powershot" || args[0] == "ps") && player.admin) { //ps
				if (powerShotMode == false) {
					powerShotMode = true;
					announce("Powershot ???? ???????c b???t b???i " + player.name, null, 0x00FF00);
				}
				else {
					powerShotMode = false;
					announce("Powershot ???? ???????c t???t b???i " + player.name, null, 0xFF0000);
				}
			}		
			else if (args[0] == "help") {
				if (superAdmins.indexOf(player.id) > -1) {
					displayHelpDev(player.id, args[1]);
					displayHelpAdmin(player.id, args[1]);
					displayHelp(player.id, args[1]);
				}
				else if(player.admin == true){
					displayHelpAdmin(player.id, args[1]);
						displayHelp(player.id, args[1]);
				}
				else {
					displayHelp(player.id, args[1]);
				}
			}
			else if (args[0] == "top") {
				whisper("C??c l???nh c?? s???n:", player.id, 0x76ff7a, "small");
				whisper("- !topgoal (xem top ghi b??n)", player.id, 0x76ff7a, "small");
				whisper("- !topassist (xem top ki???n t???o)", player.id, 0x76ff7a, "small");
				whisper("- !topwin (xem top win)", player.id, 0x76ff7a, "small");
				whisper("- !toppoint (xem top ??i???m)", player.id, 0x76ff7a, "small");
				whisper("- !topgk (xem top gk)", player.id, 0x76ff7a, "small");
				whisper("- !topcs (xem top cs)", player.id, 0x76ff7a, "small");
				whisper("- !topmoney (xem top ng?????i c?? s??? ti???n nhi???u nh???t)")
			}
			else if (args[0] == "topmoney" && args.length == 1) {
				var topgk = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = MoneyCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topgk.push({name: players[i], value: score});
				}
				topgk.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topgk.splice(0, 5);
				let pos = 1;
				if (top5.length) {
					room.sendAnnouncement("[????]??????????????? TOP NG?????I C?? NHI???U TI???N NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} ????`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]???????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "topgk" && args.length == 1) {
				var topgk = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = GKCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topgk.push({name: players[i], value: score});
				}
				topgk.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topgk.splice(0, 5);
				let pos = 1;
				if (top5.length) {
					room.sendAnnouncement("[????]??????????????? TOP NG?????I L??M GK NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} L???n`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]??????????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "topcs" && args.length == 1) {
				var topcs = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = CSCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topcs.push({name: players[i], value: score});
				}
				topcs.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topcs.splice(0, 5);
				let pos = 1;
				if (top5.length) {
					room.sendAnnouncement("[????]??????????????? TOP NG?????I GI??? S???CH L?????I NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} L???n`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "topgoal" && args.length == 1) {
				var topgoal = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = GoalCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topgoal.push({name: players[i], value: score});
				}
				topgoal.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topgoal.splice(0, 5);
				let pos = 1;
				if (top5.length) {
					room.sendAnnouncement("[????]??????????????? TOP NG?????I GHI B??N NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} B??n th???ng`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]?????????????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "topassist" && args.length == 1) {
				var topassist = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = AssistCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topassist.push({name: players[i], value: score});
				}
				topassist.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topassist.splice(0, 5);
				let pos = 1;
				if (top5.length) {
				room.sendAnnouncement("[????]??????????????? TOP NG?????I KI???N T???O NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}				
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} Ki???n t???o`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]????????????????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "topwin" && args.length == 1) {
				var topwin = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = WinsCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					topwin.push({name: players[i], value: score});
				}
				topwin.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = topwin.splice(0, 5);
				let pos = 1;
				if (top5.length) {
				room.sendAnnouncement("[????]??????????????? TOP NG?????I TH???NG NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}				
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} L???n Th???ng`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]???????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "toppoint" && args.length == 1) {
				var toppoint = [];
				players = Object.keys(thongke);
				for (var i = 0; i < players.length; i++) {
					score = PointCalc(players[i]);
					// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
					toppoint.push({name: players[i], value: score});
				}
				toppoint.sort(function(a,b){
					return b.value - a.value;
				})
				let top5 = toppoint.splice(0, 5);
				let pos = 1;
				if (top5.length) {
				room.sendAnnouncement("[????]??????????????? TOP NG?????I C?? ??I???M NHI???U NH???T ???????????????[????]", player.id, 0xadff2f, "small", 0);
				}				
				while (top5.length) {
				let tmp = top5.splice(0, 5);
				let message = tmp.map(e => `			${pos++}. ${e.name} - ${e.value} ??i???m`).join("\n");
				room.sendAnnouncement(message, player.id, 0xadff2f, "small", 0);
				room.sendAnnouncement("[????]??????????????????????????????????????????????????????????????????????????????????????????????????????[????]", player.id, 0xadff2f, "small", 0);
				}
			}
			else if (args[0] == "stats") {
				if (dadangnhap.indexOf(player.id) > -1) {
					room.sendAnnouncement("????????????????????? Th??ng tin c???a " + player.name + " ?????????????????????",player.id, 0xFFFD82, "small");
					room.sendAnnouncement(`	Rank: ${AccountsObject[PlayerObject[player.id].conn].rank}	       | ??i???m: ${AccountsObject[PlayerObject[player.id].conn].points}`, player.id,0xFFFD82, "small")
					room.sendAnnouncement(`	Ghi b??n: ${AccountsObject[PlayerObject[player.id].conn].ghiban}     | Ki???n t???o: ${AccountsObject[PlayerObject[player.id].conn].kientao}`, player.id,0xFFFD82, "small")
					room.sendAnnouncement(`	Th???ng: ${AccountsObject[PlayerObject[player.id].conn].thang}        | Thua: ${AccountsObject[PlayerObject[player.id].conn].thua}`, player.id,0xFFFD82, "small")
					room.sendAnnouncement(`	Ph???n l?????i: ${AccountsObject[PlayerObject[player.id].conn].phanluoi}  | MVP: ${AccountsObject[PlayerObject[player.id].conn].mvp}`, player.id,0xFFFD82, "small")
					room.sendAnnouncement(`	GK: ${AccountsObject[PlayerObject[player.id].conn].gk}		| CS: ${AccountsObject[PlayerObject[player.id].conn].cs}`, player.id,0xFFFD82, "small")
					room.sendAnnouncement(`	S??? ti???n hi???n c??: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}????`, player.id,0xFFFD82, "small")
					room.sendAnnouncement("????????????????????????????????????????????????????????????????????????????????????",player.id, 0xFFFD82, "small")
				}
				else {
					whisper("Vui l??ng ????ng nh???p tr?????c ????? xem th??ng tin c???a m??nh!",player.id)
				}
			}
			else if (args[0] == "viewstats") { 
				var players = room.getPlayerList();
				var parts = message.split(" ");
				var id = message.substr(10).trim();
				var p = players.find(x => x.id == id);
				if(p){
					if(p.id == player.id){
						if (dadangnhap.indexOf(player.id) > -1) {
						room.sendAnnouncement("????????????????????? Th??ng tin c???a " + player.name + " ?????????????????????",player.id, 0xFFFD82, "small");
						room.sendAnnouncement(`	Rank: ${AccountsObject[PlayerObject[player.id].conn].rank}	       | ??i???m: ${AccountsObject[PlayerObject[player.id].conn].points}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Ghi b??n: ${AccountsObject[PlayerObject[player.id].conn].ghiban}     | Ki???n t???o: ${AccountsObject[PlayerObject[player.id].conn].kientao}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Th???ng: ${AccountsObject[PlayerObject[player.id].conn].thang}        | Thua: ${AccountsObject[PlayerObject[player.id].conn].thua}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Ph???n l?????i: ${AccountsObject[PlayerObject[player.id].conn].phanluoi}  | MVP: ${AccountsObject[PlayerObject[player.id].conn].mvp}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	GK: ${AccountsObject[PlayerObject[player.id].conn].gk}		| CS: ${AccountsObject[PlayerObject[player.id].conn].cs}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	S??? ti???n hi???n c??: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}????`, player.id,0xFFFD82, "small")
						room.sendAnnouncement("????????????????????????????????????????????????????????????????????????????????????",player.id, 0xFFFD82, "small")
						}
						else {
							whisper("Vui l??ng ????ng nh???p tr?????c ????? xem th??ng tin c???a m??nh!", player.id)
						}
					}
					else{
						if (dadangnhap.indexOf(p.id) > -1) {
						room.sendAnnouncement("????????????????????? Th??ng tin c???a " + p.name + " ?????????????????????",player.id, 0xFFFD82, "small");
						room.sendAnnouncement(`	Rank: ${AccountsObject[PlayerObject[p.id].conn].rank}	       | ??i???m: ${AccountsObject[PlayerObject[p.id].conn].points}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Ghi b??n: ${AccountsObject[PlayerObject[p.id].conn].ghiban}     | Ki???n t???o: ${AccountsObject[PlayerObject[p.id].conn].kientao}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Th???ng: ${AccountsObject[PlayerObject[p.id].conn].thang}        | Thua: ${AccountsObject[PlayerObject[p.id].conn].thua}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	Ph???n l?????i: ${AccountsObject[PlayerObject[p.id].conn].phanluoi}  | MVP: ${AccountsObject[PlayerObject[p.id].conn].mvp}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	GK: ${AccountsObject[PlayerObject[p.id].conn].gk}		| CS: ${AccountsObject[PlayerObject[p.id].conn].cs}`, player.id,0xFFFD82, "small")
						room.sendAnnouncement(`	S??? ti???n hi???n c??: ${converterDinheiroEmReais(AccountsObject[PlayerObject[p.id].conn].money)}????`, player.id,0xFFFD82, "small")
						room.sendAnnouncement("????????????????????????????????????????????????????????????????????????????????????",player.id, 0xFFFD82, "small")
						}
						else {
							whisper("Ng?????i ch??i n??y ch??a ????ng nh???p!",player.id)
						}
					}
					}
					else{
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i ????!",player.id, 0xFF0000, "bold");
					}
					return false;
				}
				//room.sendAnnouncement("????????????????????? Th??ng tin c???a " + player.name + " ?????????????????????",player.id, 0xFFFD82);
				//room.sendAnnouncement(`	C???p: 0		| ??i???m: ${playerList[player.name].points}`, player.id,0xFFFD82)
				//room.sendAnnouncement(`	Ghi b??n: 0     | Ki???n t???o: ${playerList[player.name].kientao}`, player.id,0xFFFD82)
				//room.sendAnnouncement(`	Th???ng: 0        | Thua: ${playerList[player.name].thua}`, player.id,0xFFFD82)
				//room.sendAnnouncement(`	Ph???n l?????i: 0  | MVP: ${playerList[player.name].mvp}`, player.id,0xFFFD82)
				//room.sendAnnouncement("????????????????????????????????????????????????????????????????????????????????????",player.id, 0xFFFD82)
			else if (args[0] == "dangxuat") {
				if (AccountsObject[PlayerObject[player.id].conn].confirm == true) {
				AccountsObject[PlayerObject[player.id].conn].confirm = false;
				Request.put();
				sleep(100).then(() => {
					dadangnhap.splice(player.id, 1);
				});
					room.sendAnnouncement("???? ????ng Xu???t Th??nh C??ng!", player.id, 0xE0CC07, "bold", 1);
				}
				else {
					room.sendAnnouncement(`???? B???n Ch??a ????ng Nh???p!`, player.id, 0xE00707, "bold",2);
				}
				return false;
			}
			else if (args[0] == "thevang") {
				if (player.admin) {	
					if (gameState == State.PLAY){
					var players = room.getPlayerList();
					var parts = message.split(" ");
					var id = parts[1];
					reason = message.substr(9).trim();
					var p = players.find(x => x.id == id);
					let Time = secondsToMinutes(Math.floor(room.getScores().time));
			
					if(p){
					if(p.id == player.id){
						room.sendAnnouncement("B???n kh??ng th??? ????a th??? v??ng cho m??nh.",player.id, 0xff0000, "bold");
					}
					else{
						playerList[p.id - 1].thevang++;
						announce("???? Th??? V??ng D??nh Cho: " + p.name + " ???????c Ph??n X??? V?? ????a Ra B???i Tr???ng T??i: " + player.name + "\n ???? L?? Do: " + reason + " | ????Th???i Gian Th??? ???????c R??t Ra: " + Time);
						bithevang.push({Player: p.name, Reason: reason, Time: Time});
					}
					}
					else{
					room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xff0000, "bold");
					}
					checkcard(player);
					return false;
					}
					else if (gameState == State.STOP) {
						room.sendAnnouncement("Tr???n ?????u ch??a di???n ra!", player.id, 0xff0000, "bold");
					}
				}
			}
			else if (args[0] == "thedo") {
				if (player.admin) {	
					if (gameState == State.PLAY){
					var players = room.getPlayerList();
					var parts = message.split(" ");
					var id = parts[1];
					reason = message.substr(7).trim();
					var p = players.find(x => x.id == id);
					let Time = secondsToMinutes(Math.floor(room.getScores().time));
			
					if(p){
					if(p.id == player.id){
						room.sendAnnouncement("B???n kh??ng th??? ????a th??? ????? cho m??nh.",player.id, 0xff0000, "bold");
					}
					else{
						playerList[p.id - 1].thedo++;
						announce("???? Th??? ????? D??nh Cho: " + p.name + " ???????c Ph??n X??? V?? ????a Ra B???i Tr???ng T??i: " + player.name + "\n ???? L?? Do: " + reason + " | ????Th???i Gian Th??? ???????c R??t Ra: " + Time);
						bithedo.push({Player: p.name, Reason: reason, Time: Time});
					}
					}
					else{
					room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xff0000, "bold");
					}
					checkcard(player);
					return false;
					}
					else if (gameState == State.STOP) {
						room.sendAnnouncement("Tr???n ?????u ch??a di???n ra!", player.id, 0xff0000, "bold");
					}
				}
			}
			else if (args[0] == "ban") {
				if(player.admin == true){
					var players = room.getPlayerList();
					var id = parseInt(message.split(" ")[1]);
					var p = players.find(x => x.id == id);
			
					if(p){
					if(p.id == player.id){
						room.sendAnnouncement("B???n kh??ng th??? ban ch??nh m??nh! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
					}
					else{

						AccountsObject[PlayerObject[p.id].conn].banned == p.auth;
						room.kickPlayer(p.id,"B???n ???? b??? ban b???i " + player.name + ".",false);
					}
					}
					else{
					whisper("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
					}
					return false;
				}
				else{
					room.sendAnnouncement("B???n kh??ng c?? quy???n s??? d???ng l???nh n??y!",player.id,0xFF0000,"bold",2);
				}
			}
			else if (args[0] == "kick") {
				if(player.admin == true){
					var players = room.getPlayerList();
					var id = parseInt(message.split(" ")[1]);
					var p = players.find(x => x.id == id);
			
					if(p){
					if(p.id == player.id){
						room.sendAnnouncement("B???n kh??ng th??? kick ch??nh m??nh! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.",player.id, 0xFFFFFF, "bold");
					}
					else{
						room.kickPlayer(p.id,"B???n ???? b??? kick b???i " + player.name + ".",false);
					}
					}
					else{
					room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i.", player.id, 0xFFFFFF, "bold");
					}
			
				}
				else{
					room.sendAnnouncement("B???n kh??ng c?? quy???n s??? d???ng l???nh n??y!",player.id,0xFF0000,"bold",2);
				}
			}
			else if (args[0] == "random") {
				if(player.admin == true){
					random(player);
				}
			}
			else if (args[0] == "size") {
				if (player.team != 0 && !tookasize.hasOwnProperty(player.id)){
					let size = parseInt(args[1]);
					if (!isNaN(size) && size >= min_size && size <= max_size){
					room.setPlayerDiscProperties(player.id, {radius: size, invMass:  size / 30});
					tookasize[player.id] = size;
					}
					else {
					whisper("B???n ch??? c?? th??? ch???n gi???a c??c k??ch th?????c sau:  " + min_size + " v?? " + max_size, player.id);
					whisper("N???u l??m TH??? M??N cho team h??y ghi size 14 [1m90]", player.id);
					whisper("N???u l??m H???U V??? cho team h??y ghi size 13 [1m80]", player.id);
					whisper("N???u l??m TI???N ?????O ho???c TRUNG V??? cho team h??y ghi size 12 [1m75] ho???c size 11 [1m70]", player.id);
					}	
				}
				else {
				whisper("B???n ch??? c?? th??? thay ?????i k??ch th?????c m???t l???n cho m???i tr???n ?????u.", player.id);
				}
			}
			else if (args[0] ==  "votekick" || args[0] == "dongy" || args[0] == "kodongy"  || args[0] == "huyvotekick") {
				if (delayvotekick == false) {
					if (args[0] == "votekick") {
						if (votekickdangdienra == false) {
						var ID = parseInt(message.split(" ")[1]);
						if(isNaN(ID)){
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i. ",player.id, 0xd12411, 'bold', 1);
						return false;
						}
						else {
						var p = room.getPlayerList().find(x => x.id == ID);
						}
						if(!p){
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y",player.id, 0xd12411,'bold',1);
							return false;
						}
						else {
							bikick[0] = p.id;
							bikick[1] =  p.name;
							announce("???????????????????????????????????????????????????????????????????????? ??????????????????????? ????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
							announce("	????: " + player.name + " ???? m??? votekick ????? kick " + p.name,null, 0xffff00, 'bold');
							announce("	????: Nh???p !dongy ????? ?????ng ?? kick ho???c !kodongy ????? kh??ng ?????ng ?? kick",null, 0xffff00, 'bold');
							announce("	????: ?????m ng?????c 30s x??? l??",null, 0xffff00, 'bold');
							announce("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
							votekickdangdienra = true;
							setTimeout(function() {
							if (p.admin) {
							announce ("????: X??? L?? Votekick",null, 0xffff00, 'bold');
							announce("????: Kh??ng th??? votekick Admin!",player.pm,0xff0000);
							delayvotekick = true;
							kick_count = 0;
							nonkick_count = 0;
							votekickdangdienra = false;
							davotekick = [];
							}					
							else if (bikick[0] == "Khongco") {
								announce("???????????????????????????????????????????????? ??????????????????????? ????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? Votekick",null, 0xffff00, 'bold');
								announce("	????: Admin ???? h???y votekick",player.pm,0xff0000);
								announce("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								kick_count = 0;
								nonkick_count = 0;
								votekickdangdienra = false;
								davotekick = [];
							}
							else if (kick_count > nonkick_count && bikick[0] != undefined) {
								announce("???????????????????????????????????????????????? ??????????????????????? ????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? Votekick",null, 0xffff00, 'bold');
								announce("	????: S??? phi???u ?????ng ?? kick:        " + kick_count);
								announce("	????: S??? phi???u kh??ng ?????ng ?? kick:  " + nonkick_count);
								announce("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								sleep(2000).then(() => {
								room.kickPlayer(p.id,"B??? votekick");
								announce (p.name + " ???? b??? kick do s??? phi???u ?????ng ?? kick nhi???u h??n",null, 0xffff00, 'bold');
								});
								kick_count = 0;
								nonkick_count = 0;
								votekickdangdienra = false;
								delayvotekick = true;
								davotekick = [];
							}
							else if (kick_count <= nonkick_count && bikick[0] != undefined) {
								announce("????????????????????????????????????????????????????????????????????????????????? ??????????????????????? ?????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? Votekick",null, 0xffff00, 'bold');
								announce("	????: S??? phi???u ?????ng ?? kick:        " + kick_count);
								announce("	????: S??? phi???u kh??ng ?????ng ?? kick:  " + nonkick_count);
								announce("	????: Ng?????i ch??i kh??ng b??? kick do s??? phi???u b???ng nhau ho???c s??? phi???u kick ??t h??n",null, 0xffff00, 'bold');
								announce("???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								kick_count = 0;
								nonkick_count = 0;
								delayvotekick = true;
								votekickdangdienra = false;
								davotekick = [];
								}
							},30000); 
							return false;			
						}
						return false;
					}
					else {whisper("??ang c?? votekick kh??c ??ang di???n ra",player.id);}
					return false;
					}
					if (args[0] == "huyvotekick" && player.admin) {
					bikick[0]= "Khongco";
					whisper("B???n ???? h???y votekick, votekick s??? t??? ?????ng b??? h???y khi th???i gian h???t",player.id);
					}
					else if (args[0] == "dongy") {
						if (votekickdangdienra == true) {
							if (davotekick.includes(player.id) == false) {
							kick_count +=1;
							announce("????: " + player.name + " ???? ?????ng ?? kick " + bikick[1], null, 0x00ff00, 'bold');
							davotekick.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else {	whisper("Kh??ng c?? cu???c votekick n??o ??ang di???n ra c???. Nh???p !votekick id ????? m??? votekick",player.id);}
					}
					else if (args[0] == "kodongy") {
						if (votekickdangdienra == true) {
							if (davotekick.includes(player.id) == false) {
							nonkick_count +=1;
							announce("????: " + player.name + " ???? kh??ng ?????ng ?? kick " + bikick[1], null, 0xff0000, 'bold');
							davotekick.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else { whisper("Kh??ng c?? cu???c votekick n??o ??ang di???n ra. Nh???p !votekick id ????? m??? votekick",player.id);}
					}
					return false;
				}
				else {
					whisper("Votekick s??? c?? th??? s??? d???ng sau 5 ph??t.",player.id,0xff0000,'bold');
				}
				sleep(300000).then(() => {
					delayvotekick = false;
				});
			}
			else if (args[0] ==  "voteban" || args[0] == "dongy" || args[0] == "kodongy"  || args[0] == "huyvoteban") {
				if (delayvoteban == false) {
					if (args[0] == "voteban") {
						if (votebandangdienra == false) {
						var ID = parseInt(message.split(" ")[1]);
						if(isNaN(ID)){
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i v???i ID ????! Nh???p !ids ????? xem id c???a c??c ng?????i ch??i. ",player.id, 0xd12411, 'bold', 1);
						return false;
						}
						else {
						var p = room.getPlayerList().find(x => x.id == ID);
						}
						if(!p){
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y",player.id, 0xd12411,'bold',1);
							return false;
						}
						else {
							biban[0] = p.id;
							biban[1] =  p.name;
							announce("???????????????????????????????????????????????????????????????????????? ??????????????????? ???????????????????????????????????????????????????????????????.?????????",null, 0xffff00, 'bold'); //23???
							announce("	????: " + player.name + " ???? m??? voteban ????? ban " + p.name,null, 0xffff00, 'bold');
							announce("	????: Nh???p !dongy ????? ?????ng ?? ban ho???c !kodongy ????? kh??ng ?????ng ?? ban",null, 0xffff00, 'bold');
							announce("	????: ?????m ng?????c 30s x??? l??",null, 0xffff00, 'bold');
							announce("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
							votebandangdienra = true;
							setTimeout(function() {
							if (p.admin) {
							announce ("????: X??? L?? Voteban",null, 0xffff00, 'bold');
							announce("????: Kh??ng th??? voteban Admin!",player.pm,0xff0000);
							delayvote = true;
							ban_count = 0;
							nonban_count = 0;
							votebandangdienra = false;
							davoteban = [];
							}					
							else if (biban[0] == "Khongco") {
								announce("???????????????????????????????????????????????? ??????????????????? ????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? VoteBan",null, 0xffff00, 'bold');
								announce("	????: Admin ???? h???y voteban",player.pm,0xff0000);
								announce("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								ban_count = 0;
								nonban_count = 0;
								votebandangdienra = false;
								davoteban = [];
							}
							else if (ban_count > nonban_count && biban[0] != undefined) {
								announce("???????????????????????????????????????????????? ??????????????????? ????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? Voteban",null, 0xffff00, 'bold');
								announce("	????: S??? phi???u ?????ng ?? ban:        " + ban_count);
								announce("	????: S??? phi???u kh??ng ?????ng ?? ban:  " + nonban_count);
								announce("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								sleep(2000).then(() => {
								room.kickPlayer(p.id,"B??? voteban");
								announce (p.name + " ???? b??? ban do s??? phi???u ?????ng ?? ban nhi???u h??n",null, 0xffff00, 'bold');
								});
								ban_count = 0;
								nonban_count = 0;
								votebandangdienra = false;
								delayvote = true;
								davoteban = [];
							}
							else if (ban_count <= nonban_count && biban[0] != undefined) {
								announce("????????????????????????????????????????????????????????????????????????????????? ??????????????????? ?????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold'); //23???
								announce("	????: X??? L?? Voteban",null, 0xffff00, 'bold');
								announce("	????: S??? phi???u ?????ng ?? ban:        " + ban_count);
								announce("	????: S??? phi???u kh??ng ?????ng ?? ban:  " + nonban_count);
								announce("	????: Ng?????i ch??i kh??ng b??? ban do s??? phi???u b???ng nhau ho???c s??? phi???u ban ??t h??n",null, 0xffff00, 'bold');
								announce("????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",null, 0xffff00, 'bold');
								ban_count = 0;
								nonban_count = 0;
								delayvote = true;
								votebandangdienra = false;
								davoteban = [];
								}
							},30000); 
							return false;			
						}
						return false;
					}
					else {whisper("??ang c?? voteban kh??c ??ang di???n ra",player.id);}
					return false;
					}
					if (args[0] == "huyvoteban" && player.admin) {
						biban[0]= "Khongco";
					whisper("B???n ???? h???y voteban, voteban s??? t??? ?????ng b??? h???y khi th???i gian h???t",player.id);
					}
					else if (args[0] == "dongy") {
						if (votebandangdienra == true) {
							if (davoteban.includes(player.id) == false) {
								ban_count +=1;
							announce("????: " + player.name + " ???? ?????ng ?? ban " + biban[1], null, 0x00ff00, 'bold');
							davoteban.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else {	whisper("Kh??ng c?? cu???c voteban n??o ??ang di???n ra c???. Nh???p !voteban id ????? m??? votekick",player.id);}
					}
					else if (args[0] == "kodongy") {
						if (votebandangdienra == true) {
							if (davoteban.includes(player.id) == false) {
							nonban_count +=1;
							announce("????: " + player.name + " ???? kh??ng ?????ng ?? ban " + biban[1], null, 0xff0000, 'bold');
							davoteban.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else { whisper("Kh??ng c?? cu???c voteban n??o ??ang di???n ra. Nh???p !voteban id ????? m??? votekick",player.id);}
					}
					return false;
				}
				else {
					whisper("Voteban s??? c?? th??? s??? d???ng sau 5 ph??t.",player.id,0xff0000,'bold');
				}
				sleep(300000).then(() => {
					delayvoteban = false;
				});
			}
			else if (args[0] == "voteskip") {
				delayvotekick = false;
				delayvoteban = false;
			}
			else if (args[0] == "rand") {
				if(player.admin == true){
					if (args[1] == "min"){
						var id = parseInt(message.split(" ")[2]);
						min = args[2];
						announce("Min number has been set to " + args[2], player.id);
					}
					else if (args[1] == "max"){
						var id = parseInt(message.split(" ")[2]);
						max = args[2];
						announce("Max number has been set to " + args[2], player.id);
					}
				}
			}
			else if (args[0] == "super") {
				let superMsg = "Super Admins: ";
				superAdmins.forEach(function(id) {
					if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
						superMsg = superMsg + room.getPlayer(id).name + ", ";
					}
				});
				if (superAdmins.length > 0) {
					superMsg = superMsg.slice(0, -2); 
				}
				else {
					superMsg = "Kh??ng c?? super admin n??o hi???n di???n";
				}
				whisper(superMsg, player.id);
			}
			else if (args[0] == "nuoctangluc"){
				var gianuoctangluc = 5000;
				if (AccountsObject[PlayerObject[player.id].conn].money >= gianuoctangluc) {
					if (!dasudungnuoctangluc.includes(player.id)) {
						room.setPlayerDiscProperties(player.id, {invMass: 0.15, damping: 0.99});
						dasudungnuoctangluc.push(player.id);
						AccountsObject[PlayerObject[player.id].conn].money -= gianuoctangluc;
						room.sendAnnouncement(`B???n v???a mua n?????c t??ng l???c v???i gi??: ${gianuoctangluc}$.`, player.id, 0x00ff00, "small");
						room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
						whisper("N?????c t??ng l???c s??? h???t hi???u l???c sau 45s!", player.id);
						sleep(45000).then(() => {
							room.setPlayerDiscProperties(player.id, {invMass: 0.3, damping: 0.96});
							whisper("N?????c t??ng l???c ???? h???t hi???u l???c!", player.id);
							whisper("B???n s??? c?? th??? mua n?????c t??ng l???c sau 3 ph??t!", player.id);
							sleep(100000).then(() => {
								whisper("B???n ???? c?? th??? u???ng n?????c t??ng l???c!",player.id);
								dasudungnuoctangluc.shift();
							});
						});
					}
					else if (dasudungnuoctangluc.includes(player.id)){
						whisper(`B???n s??? c?? th??? s??? d???ng sau 3 ph??t!`, player.id);
						return;
					}
				}
				else {
					whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
				}
			}
			else if (args[0] == "cuahang") {
				if (args[1] == null) {
					whisper("C??c l???nh c?? s???n:", player.id, 0x76ff7a, "small");
					whisper("- !cuahang maubong", player.id, 0x76ff7a, "small");
					whisper("- !cuahang mauchat", player.id, 0x76ff7a, "small");
					whisper("- ???", player.id, 0x76ff7a, "small");
				}
				else if (args[1] == "maubong"){
					whisper("		C??c M??u B??ng Hi???n C??:", player.id, 0x76ff7a, "small");
					whisper(`M??u: ${shop.maubong.mauxam.ten}   | Gi??: ${shop.maubong.mauxam.gia}`, player.id, 0x76ff7a, "small");
					whisper(`M??u: ${shop.maubong.maula.ten}      | Gi??: ${shop.maubong.maula.gia}`, player.id, 0x76ff7a, "small");
					whisper(`M??u: ${shop.maubong.mauxanh.ten}  | Gi??: ${shop.maubong.mauxanh.gia}`, player.id, 0x76ff7a, "small");
					whisper(`M??u: ${shop.maubong.mauhong.ten} | Gi??: ${shop.maubong.mauhong.gia}`, player.id, 0x76ff7a, "small");
				}
			}
			else if(args[0] == "cauca") {
				if (cocancau.indexOf(player.id)) {
					cauca(player, fish, can_cau, fishrand);
				} else {
					whisper("B???n Kh??ng C?? C???n C??u !")
				}
				return false;
			}
			else if(args[0] == "mua") {
				if (args[1] == "cancau" || args[1] == "fishter") {
					
						if (args[2] == "canphothong"){
						if (AccountsObject[PlayerObject[player.id].conn].money >= can_cau.canphothong.price) {
							if (AccountsObject[PlayerObject[player.id].conn].cancaudamua.indexOf(can_cau > -1)){
								whisper("B???n ???? ?????t Gi???i H???n Mua L?? 1 !")
								return;
							} else {
								AccountsObject[PlayerObject[player.id].conn].cancaudamua.push(args[2])
								AccountsObject[PlayerObject[player.id].conn].money -= can_cau.canphothong.price;
								whisper(`B???n V???a Mua ${can_cau.canphothong.name} V???i Gi?? ${can_cau.canphothong.price}, G?? !canstatus + id c???n ????? ki???m tra c???n c??u`)
								room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
								cocancau.push(player.id);
							}
						} else {
							whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
						}
					}
					else if (args[2] == null) {
						whisper("Vui l??ng nh???p t??n c???n c??u!", player.id);
					}
				}
				if (args[1] == "maubong") {
					if (tenmaubong(args[2])) {
						if (AccountsObject[PlayerObject[player.id].conn].money >= giamaubong(args[2])) {
							if (store.namemaubong(args[2])) {
								if (AccountsObject[PlayerObject[player.id].conn].maubongdamua.indexOf(args[2]) > -1){
									whisper("B???n ???? mua n?? r???i!", player.id);
									return;
								}
								else {
								AccountsObject[PlayerObject[player.id].conn].maubongdamua.push(args[2])
								AccountsObject[PlayerObject[player.id].conn].money -= store.namemaubong(args[2]).giamaubong;
								room.sendAnnouncement(`B???n v???a mua ${tenmaubong(args[2])} cho b??ng khi ch???m v???i gi??: ${converterDinheiroEmReais(giamaubong(args[2]))}$.`, player.id, 0x00ff00, "small");
								room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
								}
							}
						}
						else {
							whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
						}
					}
					else if (args[2] == null) {
						whisper("Vui l??ng nh???p t??n m??u b??ng!", player.id);
					}
				}
				else if (args[1] == "mauchat") {
					if (tenmaubong(args[2])) {
						if (AccountsObject[PlayerObject[player.id].conn].money >= giamaubong(args[2])) {
							if (store.namemauchat(args[2])) {
								if (AccountsObject[PlayerObject[player.id].conn].mauchatdamua.indexOf(args[2]) > -1){
									whisper("B???n ???? mua n?? r???i!", player.id);
								}
								else {
								AccountsObject[PlayerObject[player.id].conn].mauchatdamua.push(args[2])
								AccountsObject[PlayerObject[player.id].conn].money -= store.namemauchat(args[2]).giamauchat;
								}
							}
							room.sendAnnouncement(`B???n v???a mua m??u chat ${tenmaubong(args[2])} v???i gi??: ${converterDinheiroEmReais(giamaubong(args[2]))}$.`, player.id, 0x00ff00, "small");
							room.sendAnnouncement(`B???n hi???n c??n: ${converterDinheiroEmReais(AccountsObject[PlayerObject[player.id].conn].money)}$`, player.id, 0x00ff00, "small")
						}
						else {
							whisper(`B???n kh??ng c?? ????? ti???n.`, player.id);
						}
					}
					else if (args[2] == null) {
						whisper("Vui l??ng nh???p t??n m??u chat!", player.id);
					}
				}
			}
	}
	if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);	
						whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("Kh??ng th??? t??m th???y ng?????i ch??i '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
	if (badword.includes(message.toLowerCase())){
		antisech(player, message);
		return false;
	}
	/*else if (!(message.toLowerCase()).includes(Links)){
		room.kickPlayer(player.id,"Nghi??m c???m g???i c??c link trong room!",false);
		return false;
	}*/
	else{
		if (dadangnhap.indexOf(player.id) > -1) {
			if (AccountsObject[PlayerObject[player.id].conn].mauchatdangdung == "khongco") {
				if (superAdmins.indexOf(player.id) > -1){
						room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] ${player.name}: ${message}`,messageTarget,messageColors.superadmin,messageFonts.bold,messageSounds.nothing);
					return false;	
				}
				if(player.admin){
						room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] ${player.name}: ${message}`,messageTarget,messageColors.admin,messageFonts.bold,messageSounds.nothing);
					return false;
				}
				if(player.team == 1){
						room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] - ${player.name}: ${message}`,messageTarget,messageColors.red,messageFonts.normal,messageSounds.nothing);
					return false;
				}
				if(player.team == 2){
					room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] - ${player.name}: ${message}`,messageTarget,messageColors.blue,messageFonts.normal,messageSounds.nothing);
				return false;
			}
			if(player.team == 0){
				room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] - ${player.name}: ${message}`,messageTarget,messageColors.spec,messageFonts.normal,messageSounds.nothing);
				return false;
				}
			}
			else {
				room.sendAnnouncement(`[ID: ${player.id}][${AccountsObject[PlayerObject[player.id].conn].rank}] - ${player.name}: ${message}`,messageTarget,AccountsObject[PlayerObject[player.id].conn].mauchatdangdung,messageFonts.normal,messageSounds.nothing);
				return false;
			}
		}
		else {
			room.sendAnnouncement(`[ID: ${player.id}][Unranked] ${player.name}: ${message}`,messageTarget,messageColors.unrank,messageFonts.normal,messageSounds.nothing);
			return false;	
		}
	}
}

function displayHelpDev(id, selection) {
	if (selection == null) {
		whisper("Dev commands:", id, 0xff4500, "small");
		whisper("- !ast (autostart)", id, 0xff4500, "small");
		whisper("- !testcurve", id, 0xff4500, "small");
		whisper("- !rst (auto reset team)", id, 0xff4500, "small");
		whisper("- !move [teamid]", id, 0xff4500, "small");
	}
}

function displayHelpAdmin(id, selection) {
	if (selection == null) {
		whisper("C??c l???nh c?? s???n cho Admin:", id, 0xffd700, "small");
		whisper("- !tbchat [msg] (g???i th??ng b??o)", id, 0xffd700, "small");
		whisper("- !rs (ch???n map real soccer)", id, 0xffd700, "small");
		whisper("- !rr (kh???i ?????ng l???i tr???n ?????u)", id, 0xffd700, "small");
		whisper("- !swap (ho??n ?????i c??c ?????i) ", id, 0xffd700, "small");
		whisper("- !clearsbans (unban cho t???t c??? ng?????i b??? ban)", id, 0xffd700, "small");
		whisper("- !ban/!kick [id] (ban/kick ng?????i ch??i)", id, 0xffd700, "small");
		whisper("- !randkit (random kit)", id, 0xffd700, "small");
		whisper("- !danhhieu [pro/pro2/he] [id]", id, 0xffd700, "small");
		whisper("- !color [1-6] (ch???n m??u b??ng)", id, 0xffd700, "small");
	}
}

function displayHelp(id, selection) {
	if (selection == null) {
		whisper("C??c l???nh c?? s???n:", id, 0x76ff7a, "small");
		whisper("- @@[player] [msg] (????? chat ri??ng)", id, 0x76ff7a, "small");
		whisper("- !size ????? ch???n k??ch c??? c???u th???", id, 0x76ff7a, "small");
		whisper("- !bb (bye) / !roomsech / !sech", id, 0x76ff7a, "small");
		whisper("- !teamred ho???c !teamblue ????? ch???n ?????i / !spec ????? ra d??? b???", id, 0x76ff7a, "small");
		whisper("- !ids (xem id c??c ng?????i ch??i trong ph??ng)", id, 0x76ff7a, "small");
		whisper("- !poss (xem t??? l??? ki???m so??t b??ng)", id, 0x76ff7a, "small");
		whisper("- !banlist (xem danh s??ch ng?????i b??? ban)", id, 0x76ff7a, "small");
		whisper("- !top (xem l???nh top goals,assist,win,elo)", id, 0x76ff7a, "small");
		whisper("- !maubong [vang/la/xanh/hong/xam]", id, 0x76ff7a, "small");		
		whisper("- !votekick [id] / !voteban [id]", id, 0x76ff7a, "small");
		whisper("- !stats / !viewstats [id] ", id, 0x76ff7a, "small");
		whisper("- !gkhelp / !gk", id, 0x76ff7a, "small");
		whisper("- !dangky [mk] / !dangnhap [mk] / !doimk [mk m???i]", id, 0x76ff7a, "small");
	}
}


room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	updateTeams();
	if (map == "RSR") {
		if (room.getScores() != null) {
			if (game.rsActive == false) {
				room.getPlayerList().forEach(function(player) {
					if (changedPlayer.team == Team.SPECTATORS) {
						setActivity(changedPlayer, 0);
					}
					if (player != undefined) {
						if (game.rsGoalKick == true || game.rsCorner == true) {
							room.setPlayerDiscProperties(player.id, {invMass: 9999999});
						}
					}
				});
			}
			if (treochan.includes(changedPlayer.id)) {
				room.setPlayerTeam(changedPlayer.id, 0);
				if (byPlayer) room.sendAnnouncement(changedPlayer.name + " kh??ng th??? v??o s??n!");
			}
		}
		/*if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
			room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
			whisper(changedPlayer.name + " ??ang AFK!");
			return;
		}*/
	}
}

room.onTeamGoal = function(team, scores) {
	if (map == "RSR") {
		game.rsActive = false;
		countAFK = true;
        var scores = room.getScores();
		var red = scores.red;
		var blue = scores.blue;
		var time = scores.time;
		if(roomObject.lastTeamTouched != 0 && roomObject.lastPlayerTouched != undefined){
			if(roomObject.assistingTouch == undefined){
				goals.push({Scores: `${roomObject.teams[1]} ${red}-${blue} ${roomObject.teams[2]}`, Team: team, Player: roomObject.lastPlayerTouched.name, Assist: "", Time: getScoresObjectTime(time)});
			}
			else{
				if(roomObject.assistingTouch.id == roomObject.lastPlayerTouched.id){
					goals.push({Scores: `${roomObject.teams[1]} ${red}-${blue} ${roomObject.teams[2]}`, Team: team, Player: roomObject.lastPlayerTouched.name, Assist: "", Time: getScoresObjectTime(time)});
				}
				else{
					goals.push({Scores: `${roomObject.teams[1]} ${red}-${blue} ${roomObject.teams[2]}`, Team: team, Player: roomObject.lastPlayerTouched.name, Assist: roomObject.assistingTouch.name, Time: getScoresObjectTime(time)});
				}
			}
		}
		
		
		var players = room.getPlayerList();
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let goalType;

		if (team == 1) {
			if (game.lastKickerTeam == 1) { //if goal type is goal
				goalType = "??? Ghi b??n c???a ";
				scorer = game.lastKickerName;
				playerList[game.lastKickerId - 1].banthang++;
				playerList[game.lastKickerId - 1].matchgoals++;
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
				//LevelSistem.check.goal(scorer);
					if	(superAdmins.indexOf(game.lastKickerId) > -1) {
						AccountsObject[PlayerObject[game.lastKickerId].conn].points += 2*playerGoalXp;
						AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
						AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
						AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += 2*playerGoalXp;
						AccountsObject[PlayerObject[game.lastKickerId].conn].money += 2*playerGoalMoney;
					}
					else {
						AccountsObject[PlayerObject[game.lastKickerId].conn].points += playerGoalXp;
						AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
						AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += playerGoalXp;
						AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
						AccountsObject[PlayerObject[game.lastKickerId].conn].money += playerGoalMoney;
					}
				}
				avatarCelebration(game.lastKickerId, "???");
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assists = game.secondLastKickerName;
					playerList[game.secondLastKickerId - 1].matchassists++;
					if (dadangnhap.indexOf(game.secondLastKickerId) > -1) {
					//LevelSistem.check.assists(assists);
					if	(superAdmins.indexOf(game.secondLastKickerId) > -1) {
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += 2*PlayerAssistMoney;
					}
					else{
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += PlayerAssistMoney;
					}
					}
					assister = " (??????? Ki???n t???o: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "???????");
				}
			}		
			if (game.lastKickerTeam == 2) { //if goal type is owngoal
				goalType = "???Ph???n l?????i c???a ";
				scorer = game.lastKickerName;
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
				//LevelSistem.check.owngoal(scorer);
				AccountsObject[PlayerObject[game.lastKickerId].conn].phanluoi += 1;
				if (AccountsObject[PlayerObject[game.lastKickerId].conn].points < 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += 0;
				}
				else if (AccountsObject[PlayerObject[game.lastKickerId].conn].points >= 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint -= playerOwnGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].points -= playerOwnGoalXp;
				}
				else if (AccountsObject[PlayerObject[game.lastKickerId].conn].money >= 50) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].money -= playerOwnGoalMoney;
				}
				}
				avatarCelebration(game.lastKickerId, "???");
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					assists = game.secondLastKickerName;
					assister = " (??????? Ki???n t???o: " + game.secondLastKickerName + ")";
					if (dadangnhap.indexOf(game.secondLastKickerId) > -1) {
					//LevelSistem.check.assists(assists);
					if	(superAdmins.indexOf(game.secondLastKickerId) > -1) {
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += 2*PlayerAssistMoney;
					}
					else{
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += PlayerAssistMoney;
					}
					}
					avatarCelebration(game.secondLastKickerId, "???????");
				}
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { //if goal type is goal
				playerList[game.lastKickerId - 1].banthang++;
				playerList[game.lastKickerId - 1].matchgoals++;
				goalType = "??? Ghi b??n c???a ";
				scorer = game.lastKickerName;
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
				//LevelSistem.check.goal(scorer);
				if	(superAdmins.indexOf(game.lastKickerId) > -1) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += 2*playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += 2*playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].money += 2*PlayerAssistMoney;
				}
				else {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].topgoal += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint += playerGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].ghiban += 1;
					AccountsObject[PlayerObject[game.lastKickerId].conn].money += PlayerAssistMoney;
					}
				}
				avatarCelebration(game.lastKickerId, "???");
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assists = game.secondLastKickerName;
					playerList[game.secondLastKickerId - 1].matchassists++;
					if (dadangnhap.indexOf(game.secondLastKickerId) > -1) {
					//LevelSistem.check.assists(assists);
					if	(superAdmins.indexOf(game.secondLastKickerId) > -1) {
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += 2*PlayerAssistMoney;
					}
					else{
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += PlayerAssistMoney;
					}
					}
					assister = " (??????? Ki???n t???o: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "???????");
				}
			}		
			if (game.lastKickerTeam == 1) { //if goal type is owngoal
				goalType = "???Ph???n l?????i nh?? c???a ";
				scorer = game.lastKickerName;
				if (dadangnhap.indexOf(game.lastKickerId) > -1) {
				//LevelSistem.check.owngoal(scorer);
				AccountsObject[PlayerObject[game.lastKickerId].conn].phanluoi += 1;
				if (AccountsObject[PlayerObject[game.lastKickerId].conn].points < 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].points += 0;
				}
				else if (AccountsObject[PlayerObject[game.lastKickerId].conn].points >= 5) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].toppoint -= playerOwnGoalXp;
					AccountsObject[PlayerObject[game.lastKickerId].conn].points -= playerOwnGoalXp;
				}
				else if (AccountsObject[PlayerObject[game.lastKickerId].conn].money >= 50) {
					AccountsObject[PlayerObject[game.lastKickerId].conn].money -= playerOwnGoalMoney;
				}
				}
				avatarCelebration(game.lastKickerId, "???");
				if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
					assists = game.secondLastKickerName;
					assister = " (??????? Ki???n t???o: " + game.secondLastKickerName + ")";
					if (dadangnhap.indexOf(game.secondLastKickerId) > -1) {
					//LevelSistem.check.assists(assists);
					if	(superAdmins.indexOf(game.secondLastKickerId) > -1) {
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += 2*PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += 2*PlayerAssistMoney;
					}
					else{
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].points += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].toppoint += PlayerAssistXp;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].topassist += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].kientao += 1;
						AccountsObject[PlayerObject[game.secondLastKickerId].conn].money += PlayerAssistMoney;
					}
					}
					avatarCelebration(game.secondLastKickerId, "???????");
				}
			}
			game.blueScore++;
		}
		announce("[????" + goalTime + "]" + " ???? " + game.redScore + " - " + game.blueScore + " ???? " + goalType + scorer + assister); // : (player) ???? ph?? h???y th??nh c??ng c??? ??i???m c???a ?????ch
		game.lastKicker = undefined;
		game.secondLastKicker = undefined;
		game.lastKickerTeam = undefined;
		game.secondLastKickerTeam = undefined;
		sleep(1900).then(() => {
			room.setDiscProperties(0, {color: ballcolor});
		});
		sleep(1500).then(() => {
			if (testcurve == true) {
			gk = [init, init];
			kickOff = false;
			hasFinished = false;
			room.stopGame();
			//randomUniforms();
			room.startGame();
			}
		})
	}
}

room.onPositionsReset = function() {
	if (map == "RSR") {
        if(roomObject.lastTeamTouched != 0 || roomObject.lastPlayerTouched != undefined || roomObject.previousPlayerTouched != undefined || roomObject.assistingTouch != undefined){
			roomObject.lastTeamTouched = 0,
			roomObject.lastPlayerTouched = undefined,
			roomObject.previousPlayerTouched = undefined,
			roomObject.assistingTouch = undefined
		}
		room.setDiscProperties(0, {color: ballcolor});
		if (game.lastPlayAnnounced == true) {
			room.stopGame();
			game.lastPlayAnnounced = false;
			countAFK = true;
			sleep(500).then(() => {
				endGame();
				gk = [init, init];
				kickOff = false;
				hasFinished = false;
				assistingTouch = undefined;
				lastPlayerTouched = undefined;
				//room.getPlayerList().forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
			if (autoStart == true){
				announce("Tr???n ?????u s??? b???t ?????u sau 10 gi??y");
				sleep(10500).then(() => {
					room.startGame(true);
					//randomUniforms();
					//playerList.filter(p => playerList[p.id - 1].isInTheRoom == true).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
					room.setDiscProperties(0, {color: ballcolor});
				})
			}
			})
			sleep(3500).then(() => {
				resetTeam();
				swapTeam();
			})
			}
		}
		 if (game.redScore != 0 || game.blueScore != 0) {
		let id = Object.keys(tookasize);
 		   let size;
 		   for (var i = 0; i < id.length; i++) {
  		      if (tookasize.hasOwnProperty(id[i])){
      	      size = tookasize[id[i]];
        room.setPlayerDiscProperties(id[i], {radius: size, invMass: size / 30});
        }
    }
}
}


var kickOff = false;
var hasFinished = false;

room.onGameTick = function() {
	if (map = "RSR") {
		updateGameStatus();
		handleBallTouch();
		realSoccerRef();
		getLastTouchOfTheBall();
		handleInactivity();
        getLastToucher();
		getLastTouchTheBall();
		if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
			if (room.getScores().time != 0){
				kickOff = true;
				gk = isGk();
				//redGK.push(gk[0].id);
				announce("???? GK: " + gk[0].name + " | ???? GK: " + gk[1].name);
				announce("C???u th??? g???n goal c???a c??? hai ?????i s??? ???????c ch???n l??m th??? m??n (nh???p !gk n???u b??? ch???n sai)");
				announce("N???u l??m GK n??n nh???p !size 14 ????? c?? l???i th??? cho team)");
			}
		}
	}	
}

function realSoccerRef() {
		blockThrowIn();
		blockGoalKick();
		removeBlock();
		if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
			extraTime();
			game.extraTimeAnnounced = true;
		}
		
		if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
			announce("L???n g??? cu???i", null, null, null, 1);
			game.lastPlayAnnounced = true;
		}
		
		if (game.rsCorner == true || game.rsGoalKick == true) { //add extra time
			game.extraTimeCount++;
		}
		
		if (game.rsTimer < 99999 && game.paused == false && game.rsActive == false && game.rsReady == true) {
			game.rsTimer++;
		}
		
		if (game.rsSwingTimer < 150 && game.rsCorner == false && game.rsGoalKick == false) {
			game.rsSwingTimer++;
			if (game.rsSwingTimer > 5) {
				room.setDiscProperties(0, {xgravity: room.getDiscProperties(0).xgravity * 0.97, ygravity: room.getDiscProperties(0).ygravity * 0.97}); //0.97
			}		
			if (game.rsSwingTimer == 150) {
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			}
		}
		
		
		if (game.boosterState == true) {
			game.boosterCount++;
		}
		
		if (game.boosterCount > 30) {
			game.boosterState = false;
			game.boosterCount = 0;
			room.setDiscProperties(0, {cMask: 63});
		}
		
		
		if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {	
			game.rsActive = true;
			game.outStatus = "";
		}
		
		if (game.rsActive == false && game.rsReady == true) { //expire barrier time
			if (game.outStatus == "redThrow") {
				if (game.rsTimer == throwTimeOut - 120) { // warning indicator
					ballWarning("0xff3f34", ++game.warningCount);
				}
				if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to blue throw
					game.outStatus = "blueThrow";
					game.rsTimer = 0;				
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {color: "0x0fbcf9", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
			}
			else if (game.outStatus == "blueThrow") {
				if (game.rsTimer == throwTimeOut - 120) { // warning indicator
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to red throw
					game.outStatus = "redThrow";
					game.rsTimer = 0;						
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {color: "0xff3f34", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
			}
			else if (game.outStatus == "blueGK" || game.outStatus == "redGK") {
				if (game.rsTimer == gkTimeOut - 120) { // warning indicator
					if (game.outStatus == "blueGK") {
						ballWarning("0x0fbcf9", ++game.warningCount);
					}
					if (game.outStatus == "redGK") {
						ballWarning("0xff3f34", ++game.warningCount);
					}
				}
				if (game.rsTimer == gkTimeOut) {
					game.outStatus = "";
					room.setDiscProperties(0, {color: ballcolor});
					game.rsTimer = 1000000;							
				}
			}
			else if (game.outStatus == "blueCK" || game.outStatus == "redCK") {
				if (game.rsTimer == ckTimeOut - 120) {
					if (game.outStatus == "blueCK") {
						ballWarning("0x0fbcf9", ++game.warningCount);
					}
					if (game.outStatus == "redCK") {
						ballWarning("0xff3f34", ++game.warningCount);
					}
				}
				if (game.rsTimer == ckTimeOut) {
					game.outStatus = "";
					room.setDiscProperties(1, {x: 0, y: 2000, radius: 0});
					room.setDiscProperties(2, {x: 0, y: 2000, radius: 0});
					room.setDiscProperties(0, {color: ballcolor});
					game.rsTimer = 1000000;							
				}
			}
		}
		
		if (game.rsActive == true) {
			if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45)) {
				game.rsActive = false;
				if (game.lastPlayAnnounced == true) {
					room.stopGame();
					game.lastPlayAnnounced = false;
					sleep(500).then(() => {
						endGame();
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						assistingTouch = undefined;
						lastPlayerTouched = undefined;
						//room.getPlayerList().filter(p => playerList[p.id - 1].id).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});			
						if (autoStart == true){
							announce("Tr???n ?????u s??? b???t ?????u sau 10 gi??y");
							sleep(10500).then(() => {
								room.startGame(true);
								//playerList.filter(p => playerList[p.id - 1].isInTheRoom == true).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
								//randomUniforms();
							})
						}
						})
					sleep(3500).then(() => {
						resetTeam();
						swapTeam();
					})
				}
				
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
				
				game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
				if (room.getBallPosition().y > 611.45) {
					game.ballOutPositionY = 400485;
					game.throwInPosY = 610;
				}
				if (room.getBallPosition().y < -611.45) {
					game.ballOutPositionY = -400485;
					game.throwInPosY = -610;
				}
				if (room.getBallPosition().x > 1130) {
					game.ballOutPositionX = 1130;
				}
				if (room.getBallPosition().x < -1130) {
					game.ballOutPositionX = -1130;
				}
				
				
				if (game.rsTouchTeam == 1) {				
					room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
					sleep(100).then(() => {
						game.outStatus = "blueThrow";
						game.throwinKicked = false;
						game.rsTimer = 0;
						game.rsReady = true;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
						//announce("??????? N??m bi??n d??nh cho ????");
						room.setDiscProperties(0, {color: "0x0fbcf9"});				
					});	
					sleep(100).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
					sleep(1500).then(() => {
						if (testcurve == true) {
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						room.stopGame();
						//randomUniforms();
						room.startGame();
						}
					})
				}
				else {
					room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
					sleep(100).then(() => {
						game.outStatus = "redThrow";
						game.throwinKicked = false;
						game.rsTimer = 0;
						game.rsReady = true;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
						//announce("??????? N??m bi??n d??nh cho ????");
						room.setDiscProperties(0, {color: "0xff3f34"});				
					});	
					sleep(100).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
					sleep(1500).then(() => {
						if (testcurve == true) {
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						room.stopGame();
						//randomUniforms();
						room.startGame();
						}
					})
				}
			}
		
			if (room.getBallPosition().x > 1161.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
				game.rsActive = false;	
				if (game.lastPlayAnnounced == true) {
					room.stopGame();
					game.lastPlayAnnounced = false;
					sleep(500).then(() => {
						endGame();
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						assistingTouch = undefined;
						lastPlayerTouched = undefined;
						//room.getPlayerList().filter(p => playerList[p.id - 1].id).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});			
						if (autoStart == true){
							announce("Tr???n ?????u s??? b???t ?????u sau 10 gi??y");
							sleep(10500).then(() => {
								room.startGame(true);
								//playerList.filter(p => playerList[p.id - 1].isInTheRoom == true).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
								//randomUniforms();
							})
						}
						})
					sleep(3500).then(() => {
						resetTeam();
						swapTeam();
					})
				}
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: 1060, y: 0, radius: 18 });
				sleep(100).then(() => {					
					game.outStatus = "blueGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("???? Goal Kick: ???? Blue");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: 1060, y: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
					sleep(1500).then(() => {
						if (testcurve == true) {
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						room.stopGame();
						//randomUniforms();
						room.startGame();
						}
					})
				}
				else {	
				//announce("???? Corner Kick: ???? Red");							
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -99) {					
					room.setDiscProperties(3, {x: 1140, y: -590, radius: 18 });
					room.setDiscProperties(0, {invMass: 1.50});
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: -590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});
						sleep(1500).then(() => {
							if (testcurve == true) {
							gk = [init, init];
							kickOff = false;
							hasFinished = false;
							room.stopGame();
							//randomUniforms();
							room.startGame();
							}
						})
					}
					if (room.getBallPosition().y > 99) {
					room.setDiscProperties(3, {x: 1140, y: 590, radius: 18 });
					room.setDiscProperties(0, {invMass: 1.50});
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: 590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});
					}
				}
			}
			if (room.getBallPosition().x < -1166.45 && (room.getBallPosition().y > 99 || room.getBallPosition().y < -99)) {
				game.rsActive = false;
				if (game.lastPlayAnnounced == true) {
					room.stopGame();
					game.lastPlayAnnounced = false;
					sleep(500).then(() => {
						endGame();
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						assistingTouch = undefined;
						lastPlayerTouched = undefined;
						//room.getPlayerList().filter(p => playerList[p.id - 1].id).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});			
						if (autoStart == true){
							announce("Tr???n ?????u s??? b???t ?????u sau 10 gi??y");
							sleep(10500).then(() => {
								room.startGame(true);
								//playerList.filter(p => playerList[p.id - 1].isInTheRoom == true).forEach(p => { playerList[p.id - 1].matchgoals = 0; playerList[p.id - 1].matchassists = 0; playerList[p.id - 1].thevang = 0;playerList[p.id - 1].thedo = 0;});
								//randomUniforms();
							})
						}
						})
					sleep(3500).then(() => {
						resetTeam();
						swapTeam();
					})
				}
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				//announce("???? Corner Kick: ???? Blue");				
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -99) {
					room.setDiscProperties(3, {x: -1140, y: -590, radius: 18 });
					room.setDiscProperties(0, {invMass: 1.50});
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: -590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});	
						sleep(1500).then(() => {
							if (testcurve == true) {
							gk = [init, init];
							kickOff = false;
							hasFinished = false;
							room.stopGame();
							//randomUniforms();
							room.startGame();
							}
						})
					}
					if (room.getBallPosition().y > 99) {
					room.setDiscProperties(3, {x: -1140, y: 590, radius: 18 });
					room.setDiscProperties(0, {invMass: 1.50});
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: 590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});		
				}				
			}
			else {				
				room.setDiscProperties(3, {x: -1060, y: 0, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("???? Goal Kick: ???? Red");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: -1060, y: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});					});
					sleep(1500).then(() => {
						if (testcurve == true) {
						gk = [init, init];
						kickOff = false;
						hasFinished = false;
						room.stopGame();
						//randomUniforms();
						room.startGame();
						}
					})
			}
		}
	}
}

function handleBallTouch() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = game.ballRadius;
	var playerRadius = 12;
	var triggerDistance = ballRadius + playerRadius + 0.01;
	
	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue;
		var distanceToBall = pointDistance(player.position, ballPosition);
		if ( distanceToBall < triggerDistance ) {		
			game.rsTouchTeam = player.team;
			game.throwinKicked = false;

		if (dadangnhap.indexOf(player.id) > -1) {
			if (AccountsObject[PlayerObject[player.id].conn].playerballcolor == "mauvang"){
				if (game.powershotCounter > -10 && game.powershotCounter < 70) {
				room.setDiscProperties(0, {color: ballcolor});
				}
			}
			else if (AccountsObject[PlayerObject[player.id].conn].playerballcolor == "maula"){
				if (game.powershotCounter > -10 && game.powershotCounter < 70) {
					room.setDiscProperties(0, {color: '0xadff2f'});
				}
			}
			else if (AccountsObject[PlayerObject[player.id].conn].playerballcolor == "mauxanh"){
				if (game.powershotCounter > -10 && game.powershotCounter < 70) {
					room.setDiscProperties(0, {color: '0xe0ffff'});
				}
			}
			else if (AccountsObject[PlayerObject[player.id].conn].playerballcolor == "mauhong"){
				if (game.powershotCounter > -10 && game.powershotCounter < 70) {
					room.setDiscProperties(0, {color: '0xffb6c1'});
				}
			}
			else if (AccountsObject[PlayerObject[player.id].conn].playerballcolor == "mauxam"){
				if (game.powershotCounter > -10 && game.powershotCounter < 70) {
					room.setDiscProperties(0, {color: '0xd3d3d3'});
				}
			}
		}
		else {
			if (game.powershotCounter > -10 && game.powershotCounter < 70) {
			room.setDiscProperties(0, {color: ballcolor});
			}
		}

			//=========== POWERSHOT CODE ===========
			if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" &&(powerShotMode == true )) {
                if (game.powershotID != player.id) {
                    game.powershotID = player.id;
                    game.powershotTrigger = false;
                    game.powershotCounter = 0;
               
				} else {
                    game.powershotCounter++;
                    //room.sendAnnouncement("Powershot counter: " + game.powershotCounter, null, 0x333333, "small-bold", 0);
						if (game.powershotCounter > 70 && game.powershotCounter < 150 ) {
                        room.setDiscProperties(0, {invMass: 1.90});
						room.setDiscProperties(0, {color: '0x64D191' });
                        game.powershotTrigger = true;
                    } else {
                        if (game.powershotCounter > 150 && game.powershotCounter < 250) {
                            room.setDiscProperties(0, {invMass: 2});
							room.setDiscProperties(0, {color: '0xD16BBF' });
                            game.powershotTrigger = true;
                        } else {
                            if (game.powershotCounter > 250 && game.powershotCounter < 450) {
                                room.setDiscProperties(0, {invMass: 2.10});
								room.setDiscProperties(0, {color: '0xD87B77' });
                                game.powershotTrigger = true;
                            } else {
                                if (game.powershotCounter > 400 && game.powershotCounter < 1000) {
                                    room.setDiscProperties(0, {invMass: 2.20});
									room.setDiscProperties(0, {color: '0x644CD8' });
                                    game.powershotTrigger = true;
								}
							}
						}
					}
				}
			}
			//=========== POWERSHOT CODE ===========
			
			if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
				room.setDiscProperties(0, {xgravity: 0, ygravity:0});
				game.rsSwingTimer = 10000;
			}
		}
		//=========== POWERSHOT CODE ===========
		if ( distanceToBall > triggerDistance +3 && player.id == game.powershotID && game.powershotTrigger == true && powerShotMode == true) {
			game.powershotTrigger = false;
			game.powershotCounter = 0;
			game.powershotid = 0;
			if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
				room.setDiscProperties(0, {color: ballcolor , invMass: 1.05});
				//room.sendAnnouncement("B???n kh??ng th??? s??t m???nh ???????c n??a!", game.powershotID, 0xdd3333, "bold", 2);
			}
		}
		//=========== POWERSHOT CODE ===========
	}
}


function updateGameStatus() {
	game.time = Math.floor(room.getScores().time);
	game.ballRadius = room.getDiscProperties(0).radius;
}


function announce(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0xFFFD82;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	console.log("Announce: " + msg);
}

function whisper(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	if (room.getPlayer(targetId) != null) {
		console.log("whisper -> " + room.getPlayer(targetId).name + ": " + msg);
	}
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
	if (isAdminPresent() == false && allowPublicAdmin == true) {
		announce("Hi???n kh??ng c?? Admin n??o. Nh???p !admin ????? ???????c trao quy???n Admin");
	}
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function ballWarning(origColour, warningCount) {
	sleep(200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: ballcolor});
		}
	});
	sleep(400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: ballcolor});
		}
	});
	sleep(800).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1000).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: ballcolor});
		}
	});
	sleep(1200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: ballcolor});
		}
	});
	sleep(1600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1675).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: ballcolor});
		}
	});
	sleep(1750).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
}

function extraTime() {
	var extraSeconds = Math.ceil(game.extraTimeCount / 60);
	game.extraTimeEnd = (gameTime * 60) + extraSeconds;
	announce("B?? gi???: " + extraSeconds + " Gi??y", null, null, null, 1);
}

function avatarCelebration(playerId, avatar) {
	room.setPlayerAvatar(playerId, avatar);
	sleep(250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(3000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(3250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
}

function secondsToMinutes(time) {
	// Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function blockThrowIn() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().y < 0) { // top throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -460) {
						room.setPlayerDiscProperties(player.id, {y: -445});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(17).x != 1149) { // show top red line
					room.setDiscProperties(17, {x: 1149});
				}
				if (room.getDiscProperties(19).x != -1149) { // hide top blue line
					room.setDiscProperties(19, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -460) {
						room.setPlayerDiscProperties(player.id, {y: -445});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(19).x != 1149) { // show top blue line
					room.setDiscProperties(19, {x: 1149});
				}
				if (room.getDiscProperties(17).x != -1149) { // hide top red line
					room.setDiscProperties(17, {x: -1149});
				}
			});
		}
	}
	if (room.getBallPosition().y > 0) { // bottom throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 460) {
						room.setPlayerDiscProperties(player.id, {y: 445});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(21).x != 1149) { // show bottom red line
					room.setDiscProperties(21, {x: 1149});
				}
				if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
					room.setDiscProperties(23, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 460) {
						room.setPlayerDiscProperties(player.id, {y: 445});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(23).x != 1149) { // show bottom blue line
					room.setDiscProperties(23, {x: 1149});
				}
				if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
					room.setDiscProperties(21, {x: -1149});
				}
			});
		}		
	}	
}


function blockGoalKick() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().x < 0) { // left side red goal kick
		if (game.outStatus == "redGK") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).x < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x < -500 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: -485});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}
	}
	if (room.getBallPosition().x > 0) { // right side blue goal kick
		if (game.outStatus == "blueGK") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).x > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x > 500 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: 485});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}		
	}	
}



function removeBlock() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (game.outStatus == "") {
		players.forEach(function(player) {
			if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
				room.setPlayerDiscProperties(player.id, {cGroup: 2});
			}
			if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 4) {
				room.setPlayerDiscProperties(player.id, {cGroup: 4});
			}
		});
		if (room.getDiscProperties(17).x != -1149) { // hide top red line
			room.setDiscProperties(17, {x: -1149});
		}
		if (room.getDiscProperties(19).x != -1149) { // hide top blue line
			room.setDiscProperties(19, {x: -1149});
		}
		if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
			room.setDiscProperties(21, {x: -1149});
		}
		if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
			room.setDiscProperties(23, {x: -1149});
		}		
	}
}
