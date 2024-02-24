const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');


var ids = [{"Id":35320},
{"Id":50710},
{"Id":253802},
{"Id":7133},
{"Id":49209},
{"Id":49289},
{"Id":40570},
{"Id":45789},
{"Id":28779},
{"Id":28114},
{"Id":28081},
{"Id":34102},
{"Id":51880},
{"Id":52337},
{"Id":48472},
{"Id":43650},
{"Id":5390},
{"Id":44936},
{"Id":51469},
{"Id":42605},
{"Id":36084},
{"Id":38699},
{"Id":48124},
{"Id":8189},
{"Id":56194},
{"Id":35263},
{"Id":43906},
{"Id":45224},
{"Id":42639},
{"Id":37000},
{"Id":4578},
{"Id":24598},
{"Id":56029},
{"Id":56143},
{"Id":42657},
{"Id":48462},
{"Id":226492},
{"Id":43652},
{"Id":26329},
{"Id":36185},
{"Id":47270},
{"Id":50747},
{"Id":219889},
{"Id":4144},
{"Id":277906},
{"Id":45813},
{"Id":28235},
{"Id":55427},
{"Id":379143},
{"Id":55814},
{"Id":41434},
{"Id":55429},
{"Id":303669},
{"Id":5616},
{"Id":37737},
{"Id":46973},
{"Id":49764},
{"Id":52969},
{"Id":8192},
{"Id":8180},
{"Id":348144},
{"Id":55608},
{"Id":303427},
{"Id":33335},
{"Id":52983},
{"Id":50244},
{"Id":44485},
{"Id":44828},
{"Id":267192},
{"Id":5939},
{"Id":40551},
{"Id":9062},
{"Id":5334},
{"Id":29632},
{"Id":56025},
{"Id":6513},
{"Id":28763},
{"Id":55301},
{"Id":581379},
{"Id":41378},
{"Id":44932},
{"Id":10772},
{"Id":7702},
{"Id":39836},
{"Id":308967},
{"Id":52066},
{"Id":55870},
{"Id":36597},
{"Id":38967},
{"Id":37712},
{"Id":44111},
{"Id":20372},
{"Id":38407},
{"Id":321777},
{"Id":19296},
{"Id":37232},
{"Id":42623},
{"Id":24611},
{"Id":55343},
{"Id":21585},
{"Id":298438},
{"Id":20387},
{"Id":49626},
{"Id":299572},
{"Id":388802},
{"Id":48122},
{"Id":325026},
{"Id":297433},
{"Id":44489},
{"Id":300628},
{"Id":14187},
{"Id":629074},
{"Id":533956},
{"Id":49361},
{"Id":15913},
{"Id":24605},
{"Id":45821},
{"Id":50744},
{"Id":46774},
{"Id":512191},
{"Id":55988},
{"Id":7924},
{"Id":311158},
{"Id":24728},
{"Id":44708},
{"Id":12856},
{"Id":55805},
{"Id":55412},
{"Id":25913},
{"Id":4169},
{"Id":38117},
{"Id":34028},
{"Id":41306},
{"Id":300631},
{"Id":41028},
{"Id":43547},
{"Id":11728},
{"Id":301236},
{"Id":317273},
{"Id":25446},
{"Id":568276},
{"Id":5560},
{"Id":277472},
{"Id":6285},
{"Id":4451},
{"Id":232435},
{"Id":6044},
{"Id":303423},
{"Id":42420},
{"Id":55787},
{"Id":51439},
{"Id":277916},
{"Id":49005},
{"Id":55761},
{"Id":25490},
{"Id":52934},
{"Id":52057},
{"Id":422108},
{"Id":47623},
{"Id":6683},
{"Id":234675},
{"Id":29990},
{"Id":55307},
{"Id":419873},
{"Id":42683},
{"Id":52810},
{"Id":38624},
{"Id":230559},
{"Id":55848},
{"Id":10582},
{"Id":272450},
{"Id":24249},
{"Id":259410},
{"Id":24289},
{"Id":536936},
{"Id":45458},
{"Id":30009},
{"Id":55354},
{"Id":280734},
{"Id":38062},
{"Id":320652},
{"Id":24705},
{"Id":249866},
{"Id":38714},
{"Id":530011},
{"Id":642519},
{"Id":21537},
{"Id":337790},
{"Id":8917},
{"Id":38258},
{"Id":30750},
{"Id":233514},
{"Id":14325},
{"Id":34059},
{"Id":227760},
{"Id":52047},
{"Id":51462},
{"Id":1070173},
{"Id":38710},
{"Id":36622},
{"Id":391485},
{"Id":55612},
{"Id":51100},
{"Id":56153},
{"Id":52917},
{"Id":55906},
{"Id":600498},
{"Id":20263},
{"Id":440970},
{"Id":323389},
{"Id":52681},
{"Id":1028655},
{"Id":8291},
{"Id":24609},
{"Id":524049},
{"Id":539511},
{"Id":24752},
{"Id":40879},
{"Id":43656},
{"Id":50804},
{"Id":24714},
{"Id":25056},
{"Id":604302},
{"Id":22182},
{"Id":44956},
{"Id":23797},
{"Id":53116},
{"Id":56266},
{"Id":417268},
{"Id":436677},
{"Id":40563},
{"Id":30934},
{"Id":53115},
{"Id":230193},
{"Id":465793},
{"Id":52199},
{"Id":12803},
{"Id":431901},
{"Id":39037},
{"Id":20123},
{"Id":55456},
{"Id":55954},
{"Id":326434},
{"Id":318339},
{"Id":5766},
{"Id":8579},
{"Id":56007},
{"Id":37105},
{"Id":784367},
{"Id":625371},
{"Id":30045},
{"Id":318788},
{"Id":436757},
{"Id":40582},
{"Id":55854},
{"Id":42423},
{"Id":49010},
{"Id":33141},
{"Id":1178586},
{"Id":46208},
{"Id":55528},
{"Id":51110},
{"Id":38929},
{"Id":787987},
{"Id":5628},
{"Id":4174},
{"Id":48369},
{"Id":47884},
{"Id":209457},
{"Id":961407},
{"Id":429754},
{"Id":519070},
{"Id":345821},
{"Id":671805},
{"Id":50431},
{"Id":53234},
{"Id":32323},
{"Id":42620},
{"Id":381743},
{"Id":1072488},
{"Id":53118},
{"Id":37491},
{"Id":215155},
{"Id":32685},
{"Id":47660},
{"Id":333066},
{"Id":247235},
{"Id":39024},
{"Id":52445},
{"Id":670025},
{"Id":372116},
{"Id":45797},
{"Id":24719},
{"Id":1127317},
{"Id":307808},
{"Id":24750},
{"Id":355269},
{"Id":325012},
{"Id":957645},
{"Id":37696},
{"Id":236489},
{"Id":1159641},
{"Id":55416},
{"Id":6499},
{"Id":42321},
{"Id":44091},
{"Id":24708},
{"Id":55820},
{"Id":7502},
{"Id":290716},
{"Id":302845},
{"Id":38373},
{"Id":921509},
{"Id":24760},
{"Id":502714},
{"Id":380354},
{"Id":316397},
{"Id":348034},
{"Id":37091},
{"Id":373538},
{"Id":49535},
{"Id":1058514},
{"Id":5702},
{"Id":6128},
{"Id":219885},
{"Id":227772},
{"Id":793463},
{"Id":55935},
{"Id":56093},
{"Id":291844},
{"Id":643197},
{"Id":38393},
{"Id":437316},
{"Id":974087},
{"Id":13399},
{"Id":629063},
{"Id":45815},
{"Id":18675},
{"Id":300618},
{"Id":44407},
{"Id":31036},
{"Id":232359},
{"Id":37004},
{"Id":26184},
{"Id":414966},
{"Id":39954},
{"Id":55872},
{"Id":379140},
{"Id":547749},
{"Id":318845},
{"Id":29264},
{"Id":6274},
{"Id":56251},
{"Id":14020},
{"Id":31034},
{"Id":352048},
{"Id":48469},
{"Id":307756},
{"Id":43121},
{"Id":318340},
{"Id":629058},
{"Id":1241277},
{"Id":55946},
{"Id":348133},
{"Id":55973},
{"Id":293831},
{"Id":784369},
{"Id":6278},
{"Id":47015},
{"Id":629076},
{"Id":6628},
{"Id":318334},
{"Id":794713},
{"Id":332980},
{"Id":55497},
{"Id":24790},
{"Id":585083},
{"Id":461281},
{"Id":49638},
{"Id":277662},
{"Id":24701},
{"Id":214696},
{"Id":20286},
{"Id":24990},
{"Id":55758},
{"Id":420427},
{"Id":44410},
{"Id":37749},
{"Id":52962},
{"Id":24697},
{"Id":230855},
{"Id":670035},
{"Id":315232},
{"Id":308235},
{"Id":37740},
{"Id":37265},
{"Id":276298},
{"Id":270484},
{"Id":46788},
{"Id":8166},
{"Id":974719},
{"Id":252932},
{"Id":56074},
{"Id":940593},
{"Id":36592},
{"Id":25430},
{"Id":956319},
{"Id":55952},
{"Id":39013},
{"Id":7629},
{"Id":227758},
{"Id":230551},
{"Id":37250},
{"Id":820351},
{"Id":56054},
{"Id":25120},
{"Id":40250},
{"Id":38613},
{"Id":24237},
{"Id":43543},
{"Id":605680},
{"Id":25428},
{"Id":290462},
{"Id":6033},
{"Id":40560},
{"Id":1276719},
{"Id":56221},
{"Id":534734},
{"Id":36581},
{"Id":701217},
{"Id":495964},
{"Id":30176},
{"Id":16178},
{"Id":220519},
{"Id":38401},
{"Id":35582},
{"Id":720471},
{"Id":1036191},
{"Id":440990},
{"Id":474760},
{"Id":269280},
{"Id":214695},
{"Id":51738},
{"Id":1153767},
{"Id":45396},
{"Id":833777},
{"Id":7252},
{"Id":794707},
{"Id":297635},
{"Id":34105},
{"Id":233400},
{"Id":595921},
{"Id":9310},
{"Id":49363},
{"Id":8119},
{"Id":46978},
{"Id":55822},
{"Id":26802},
{"Id":931581},
{"Id":15501},
{"Id":50424},
{"Id":922943},
{"Id":540316},
{"Id":784379},
{"Id":49356},
{"Id":51872},
{"Id":45705},
{"Id":30028},
{"Id":230555},
{"Id":46214},
{"Id":524253},
{"Id":55329},
{"Id":1276393},
{"Id":452472},
{"Id":333000},
{"Id":272364},
{"Id":417381},
{"Id":244497},
{"Id":959767},
{"Id":1209110},
{"Id":227762},
{"Id":32498},
{"Id":23852},
{"Id":30102},
{"Id":5681},
{"Id":33975},
{"Id":539304},
{"Id":391832},
{"Id":23725},
{"Id":46248},
{"Id":43266},
{"Id":56283},
{"Id":24286},
{"Id":446507},
{"Id":55408},
{"Id":361952},
{"Id":56224},
{"Id":928057},
{"Id":574287},
{"Id":1071473},
{"Id":293983},
{"Id":55346},
{"Id":6038},
{"Id":55395},
{"Id":23826},
{"Id":232364},
{"Id":43590},
{"Id":32242},
{"Id":823509},
{"Id":297488},
{"Id":38009},
{"Id":646173},
{"Id":990031},
{"Id":1276700},
{"Id":12466},
{"Id":5597},
{"Id":269237},
{"Id":42628},
{"Id":38757},
{"Id":26421},
{"Id":23460},
{"Id":938959},
{"Id":41984},
{"Id":49633},
{"Id":297628},
{"Id":53214},
{"Id":55414},
{"Id":819429},
{"Id":47267},
{"Id":55840},
{"Id":51659},
{"Id":1141934},
{"Id":52442},
{"Id":350629},
{"Id":49636},
{"Id":55578},
{"Id":49125},
{"Id":553821},
{"Id":44102},
{"Id":1129328},
{"Id":596664},
{"Id":5236},
{"Id":308251},
{"Id":348056},
{"Id":19264},
{"Id":33066},
{"Id":1072487},
{"Id":14153},
{"Id":49700},
{"Id":550133},
{"Id":24964},
{"Id":334337},
{"Id":230549},
{"Id":37601},
{"Id":55259},
{"Id":585081},
{"Id":38008},
{"Id":267455},
{"Id":669365},
{"Id":235516},
{"Id":55713},
{"Id":296597},
{"Id":480603},
{"Id":44149},
{"Id":13411},
{"Id":14244},
{"Id":34103},
{"Id":935995},
{"Id":52059},
{"Id":52347},
{"Id":52626},
{"Id":1005257},
{"Id":701215},
{"Id":23681},
{"Id":38058},
{"Id":29725},
{"Id":37602},
{"Id":959759},
{"Id":25589},
{"Id":314615},
{"Id":1174024},
{"Id":820677},
{"Id":360456},
{"Id":5674},
{"Id":46987},
{"Id":265564},
{"Id":56186},
{"Id":414971},
{"Id":38924},
{"Id":311592},
{"Id":22403},
{"Id":49758},
{"Id":25451},
{"Id":290630},
{"Id":457249},
{"Id":403902},
{"Id":373696},
{"Id":46750},
{"Id":1076713},
{"Id":326016},
{"Id":4161},
{"Id":827023},
{"Id":55438},
{"Id":55391},
{"Id":41297},
{"Id":949473},
{"Id":414970},
{"Id":45840},
{"Id":23850},
{"Id":10617},
{"Id":238612},
{"Id":233712},
{"Id":42272},
{"Id":659081},
{"Id":39745},
{"Id":37101},
{"Id":245166},
{"Id":222354},
{"Id":51107},
{"Id":6995},
{"Id":55388},
{"Id":26238},
{"Id":516561},
{"Id":55825},
{"Id":326968},
{"Id":425943},
{"Id":1253822},
{"Id":24723},
{"Id":46934},
{"Id":43363},
{"Id":7326},
{"Id":315594},
{"Id":950303},
{"Id":20431},
{"Id":407265},
{"Id":233258},
{"Id":23694},
{"Id":50421},
{"Id":44416},
{"Id":489889},
{"Id":554691},
{"Id":56035},
{"Id":316102},
{"Id":623977},
{"Id":11974},
{"Id":438563},
{"Id":51488},
{"Id":46393},
{"Id":51446},
{"Id":23899},
{"Id":18632},
{"Id":38261},
{"Id":25022},
{"Id":23688},
{"Id":55736},
{"Id":6282},
{"Id":440522},
{"Id":482478},
{"Id":319758},
{"Id":348054},
{"Id":4146},
{"Id":662973},
{"Id":414248},
{"Id":439952},
{"Id":56227},
{"Id":43524},
{"Id":36383},
{"Id":307075},
{"Id":232438},
{"Id":25051},
{"Id":646175},
{"Id":33058},
{"Id":623695},
{"Id":1241265},
{"Id":465327},
{"Id":55970},
{"Id":12454},
{"Id":52045},
{"Id":6462},
{"Id":711559},
{"Id":24692},
{"Id":38396},
{"Id":25112},
{"Id":541224},
{"Id":362603},
{"Id":430105},
{"Id":379774},
{"Id":670031},
{"Id":47711},
{"Id":696401},
{"Id":418615},
{"Id":268740},
{"Id":233802},
{"Id":36192},
{"Id":352894},
{"Id":922941},
{"Id":51232},
{"Id":55894},
{"Id":662235},
{"Id":1156690},
{"Id":245490},
{"Id":55269},
{"Id":911707},
{"Id":25635},
{"Id":348148},
{"Id":55698},
{"Id":9117},
{"Id":55641},
{"Id":4433},
{"Id":24882},
{"Id":49347},
{"Id":43265},
{"Id":677077},
{"Id":23767},
{"Id":533862},
{"Id":526441},
{"Id":348016},
{"Id":521637},
{"Id":1077310},
{"Id":274926},
{"Id":42655},
{"Id":38118},
{"Id":49677},
{"Id":24762},
{"Id":1058989},
{"Id":387420},
{"Id":41316},
{"Id":1027779},
{"Id":19500},
{"Id":13368},
{"Id":9163},
{"Id":55267},
{"Id":55915},
{"Id":681305},
{"Id":494230},
{"Id":1193310},
{"Id":55367},
{"Id":23865},
{"Id":960361},
{"Id":19323},
{"Id":56219},
{"Id":800675},
{"Id":16274},
{"Id":935553},
{"Id":595004},
{"Id":51492},
{"Id":232285},
{"Id":334340},
{"Id":47492},
{"Id":55971},
{"Id":392945},
{"Id":290948},
{"Id":230558},
{"Id":11865},
{"Id":30042},
{"Id":629070},
{"Id":52912},
{"Id":56104},
{"Id":4493},
{"Id":793457},
{"Id":24251},
{"Id":15403},
{"Id":55976},
{"Id":24776},
{"Id":550215},
{"Id":1041679},
{"Id":51226},
{"Id":9246},
{"Id":51862},
{"Id":596376},
{"Id":1093091},
{"Id":524048},
{"Id":43539},
{"Id":437927},
{"Id":43697},
{"Id":646193},
{"Id":208657},
{"Id":10881},
{"Id":39940},
{"Id":50848},
{"Id":51050},
{"Id":30018},
{"Id":237095},
{"Id":647771},
{"Id":5593},
{"Id":23704},
{"Id":56176},
{"Id":698317},
{"Id":873199},
{"Id":212756},
{"Id":51786},
{"Id":55991},
{"Id":23755},
{"Id":55680},
{"Id":281653},
{"Id":221140},
{"Id":1248357},
{"Id":475281},
{"Id":23803},
{"Id":42626},
{"Id":23523},
{"Id":55663},
{"Id":42699},
{"Id":315035},
{"Id":505120},
{"Id":47215},
{"Id":24974},
{"Id":232491},
{"Id":677081},
{"Id":9254},
{"Id":55737},
{"Id":652687},
{"Id":25967},
{"Id":40088},
{"Id":52430},
{"Id":41324},
{"Id":1178065},
{"Id":387435},
{"Id":37235},
{"Id":27641},
{"Id":14246},
{"Id":56064},
{"Id":596375},
{"Id":230553},
{"Id":703323},
{"Id":44070},
{"Id":550235},
{"Id":44098},
{"Id":446690},
{"Id":19346},
{"Id":541991},
{"Id":398666},
{"Id":18023},
{"Id":43701},
{"Id":44486},
{"Id":38620},
{"Id":379504},
{"Id":36326},
{"Id":30732},
{"Id":260036},
{"Id":574178},
{"Id":52343},
{"Id":19364},
{"Id":56107},
{"Id":273439},
{"Id":5392},
{"Id":1078692},
{"Id":51246},
{"Id":37257},
{"Id":35565},
{"Id":25087},
{"Id":52622},
{"Id":24969},
{"Id":229225},
{"Id":50438},
{"Id":34078},
{"Id":52812},
{"Id":348024},
{"Id":53191},
{"Id":24729},
{"Id":697183},
{"Id":897549},
{"Id":56031},
{"Id":437005},
{"Id":8608},
{"Id":4864},
{"Id":277911},
{"Id":228622},
{"Id":288211},
{"Id":44024},
{"Id":51221},
{"Id":55944},
{"Id":16203},
{"Id":46538},
{"Id":646191},
{"Id":50249},
{"Id":440516},
{"Id":552152},
{"Id":530812},
{"Id":56154},
{"Id":38970},
{"Id":51901},
{"Id":719715},
{"Id":420402},
{"Id":23860},
{"Id":447458},
{"Id":308410},
{"Id":638713},
{"Id":42066},
{"Id":401540},
{"Id":1058510},
{"Id":1057456},
{"Id":50802},
{"Id":28090},
{"Id":506612},
{"Id":210279},
{"Id":50247},
{"Id":261354},
{"Id":23759},
{"Id":31038},
{"Id":254114},
{"Id":292152},
{"Id":37698},
{"Id":10633},
{"Id":764321},
{"Id":348026},
{"Id":1138316},
{"Id":24725},
{"Id":16932},
{"Id":12450},
{"Id":49619},
{"Id":216920},
{"Id":1195667},
{"Id":40378},
{"Id":4951},
{"Id":1184439},
{"Id":295644},
{"Id":25123},
{"Id":25613},
{"Id":48835},
{"Id":55705},
{"Id":267724},
{"Id":248920},
{"Id":19276},
{"Id":1195664},
{"Id":328026},
{"Id":55878},
{"Id":37248},
{"Id":41140},
{"Id":974109},
{"Id":23811},
{"Id":10870},
{"Id":39950},
{"Id":1099379},
{"Id":40591},
{"Id":17185},
{"Id":38249},
{"Id":1045883},
{"Id":27223},
{"Id":51660},
{"Id":37095},
{"Id":24699},
{"Id":414821},
{"Id":51651},
{"Id":259413},
{"Id":681117},
{"Id":6056},
{"Id":603410},
{"Id":477021},
{"Id":332996},
{"Id":362541},
{"Id":32345},
{"Id":355583},
{"Id":481896},
{"Id":772471},
{"Id":25098},
{"Id":35805},
{"Id":348129},
{"Id":52821},
{"Id":47190},
{"Id":277912},
{"Id":27978},
{"Id":7926},
{"Id":51657},
{"Id":1323683},
{"Id":348059},
{"Id":52675},
{"Id":364329},
{"Id":308798},
{"Id":1139028},
{"Id":49557},
{"Id":948437},
{"Id":571703},
{"Id":38111},
{"Id":1152427},
{"Id":425639},
{"Id":384817},
{"Id":1212829},
{"Id":524249},
{"Id":447261},
{"Id":55714},
{"Id":559066},
{"Id":670013},
{"Id":4185},
{"Id":24839},
{"Id":665053},
{"Id":716733},
{"Id":46592},
{"Id":820691},
{"Id":538506},
{"Id":55562},
{"Id":308794},
{"Id":36297},
{"Id":235524},
{"Id":1072470},
{"Id":36948},
{"Id":422965},
{"Id":49854},
{"Id":526481},
{"Id":38952},
{"Id":38133},
{"Id":33120},
{"Id":25433},
{"Id":327830},
{"Id":23691},
{"Id":500268},
{"Id":53216},
{"Id":55571},
{"Id":1125867},
{"Id":307653},
{"Id":559235},
{"Id":6903},
{"Id":738445},
{"Id":820685},
{"Id":1070168},
{"Id":414249},
{"Id":470917},
{"Id":268739},
{"Id":17134},
{"Id":470699},
{"Id":427178},
{"Id":55652},
{"Id":308294},
{"Id":288992},
{"Id":46681},
{"Id":444135},
{"Id":48449},
{"Id":52419},
{"Id":51248},
{"Id":27225},
{"Id":51220},
{"Id":10816},
{"Id":1195672},
{"Id":450860},
{"Id":380956},
{"Id":280490},
{"Id":47232},
{"Id":25536},
{"Id":52833},
{"Id":990023},
{"Id":333001},
{"Id":330223},
{"Id":23874},
{"Id":443263},
{"Id":1248188},
{"Id":36835},
{"Id":55909},
{"Id":24918},
{"Id":44696},
{"Id":343529},
{"Id":681681},
{"Id":1195674},
{"Id":24952},
{"Id":37494},
{"Id":806241},
{"Id":50240},
{"Id":55846},
{"Id":17102},
{"Id":1161038},
{"Id":16975},
{"Id":23799},
{"Id":41224},
{"Id":24901},
{"Id":16406},
{"Id":410765},
{"Id":341593},
{"Id":47850},
{"Id":1058987},
{"Id":32391},
{"Id":233901},
{"Id":21646},
{"Id":961401},
{"Id":52630},
{"Id":38708},
{"Id":36627},
{"Id":48465},
{"Id":52206},
{"Id":24943},
{"Id":48284},
{"Id":24874},
{"Id":6256},
{"Id":330902},
{"Id":50860},
{"Id":1205381},
{"Id":302875},
{"Id":25543},
{"Id":26872},
{"Id":30954},
{"Id":595790},
{"Id":40618},
{"Id":493765},
{"Id":946507},
{"Id":351588},
{"Id":16951},
{"Id":37730},
{"Id":348049},
{"Id":596417},
{"Id":36993},
{"Id":41285},
{"Id":353431},
{"Id":235532},
{"Id":38989},
{"Id":497121},
{"Id":5239},
{"Id":49920},
{"Id":38264},
{"Id":8520},
{"Id":44014},
{"Id":28792},
{"Id":46945},
{"Id":24716},
{"Id":914503},
{"Id":30112},
{"Id":384525},
{"Id":366725},
{"Id":37224},
{"Id":41046},
{"Id":56059},
{"Id":55782},
{"Id":326632},
{"Id":235519},
{"Id":51865},
{"Id":318842},
{"Id":11724},
{"Id":49554},
{"Id":24711},
{"Id":300619},
{"Id":42658},
{"Id":1062706},
{"Id":39091},
{"Id":552881},
{"Id":243942},
{"Id":16362},
{"Id":958691},
{"Id":51300},
{"Id":12909},
{"Id":51885},
{"Id":46189},
{"Id":31820},
{"Id":953793},
{"Id":22365},
{"Id":53230},
{"Id":629075},
{"Id":24996},
{"Id":13418},
{"Id":49178},
{"Id":12850},
{"Id":526462},
{"Id":398513},
{"Id":443150},
{"Id":6525},
{"Id":210283},
{"Id":401537},
{"Id":1294141},
{"Id":35673},
{"Id":877051},
{"Id":51437},
{"Id":290645},
{"Id":288305},
{"Id":39005},
{"Id":36294},
{"Id":20187},
{"Id":27622},
{"Id":436749},
{"Id":24796},
{"Id":1196500},
{"Id":39956},
{"Id":713811},
{"Id":32346},
{"Id":471342},
{"Id":267454},
{"Id":50163},
{"Id":1122557},
{"Id":55509},
{"Id":784373},
{"Id":46569},
{"Id":1151288},
{"Id":43685},
{"Id":55235},
{"Id":56208},
{"Id":348135},
{"Id":30049},
{"Id":526021},
{"Id":524247},
{"Id":50426},
{"Id":288284},
{"Id":6060},
{"Id":1077307},
{"Id":531953},
{"Id":364343},
{"Id":55573},
{"Id":25544},
{"Id":47700},
{"Id":53233},
{"Id":56167},
{"Id":44851},
{"Id":24773},
{"Id":307449},
{"Id":493773},
{"Id":833087},
{"Id":827051},
{"Id":52687},
{"Id":696127},
{"Id":24694},
{"Id":24857},
{"Id":26829},
{"Id":1061090},
{"Id":52790},
{"Id":33943},
{"Id":20278},
{"Id":300624},
{"Id":36069},
{"Id":55265},
{"Id":362201},
{"Id":5961},
{"Id":55628},
{"Id":499594},
{"Id":52808},
{"Id":39020},
{"Id":414397},
{"Id":49552},
{"Id":1060380},
{"Id":30107},
{"Id":6565},
{"Id":10656},
{"Id":919493},
{"Id":257574},
{"Id":16876},
{"Id":4818},
{"Id":539305},
{"Id":52197},
{"Id":23742},
{"Id":370040},
{"Id":401057},
{"Id":55279},
{"Id":319439},
{"Id":6551},
{"Id":459752},
{"Id":696139},
{"Id":311427},
{"Id":700167},
{"Id":23700},
{"Id":555850},
{"Id":232443},
{"Id":45949},
{"Id":49368},
{"Id":51481},
{"Id":230852},
{"Id":6950},
{"Id":35280},
{"Id":38132},
{"Id":38751},
{"Id":817069},
{"Id":40082},
{"Id":350632},
{"Id":629059},
{"Id":25532},
{"Id":5017},
{"Id":52055},
{"Id":55524},
{"Id":24139},
{"Id":44960},
{"Id":399259},
{"Id":24599},
{"Id":370846},
{"Id":20259},
{"Id":379890},
{"Id":51877},
{"Id":51905},
{"Id":208253},
{"Id":317248},
{"Id":23756},
{"Id":55321},
{"Id":52280},
{"Id":23846},
{"Id":25539},
{"Id":19374},
{"Id":359746},
{"Id":56138},
{"Id":55419},
{"Id":313432},
{"Id":446807},
{"Id":41264},
{"Id":1159653},
{"Id":1112220},
{"Id":348109},
{"Id":9089},
{"Id":946517},
{"Id":434429},
{"Id":51739},
{"Id":44716},
{"Id":1203754},
{"Id":990081},
{"Id":25601},
{"Id":55675},
{"Id":38141},
{"Id":23729},
{"Id":345825},
{"Id":51655},
{"Id":1181708},
{"Id":45984},
{"Id":943281},
{"Id":8476},
{"Id":431902},
{"Id":37111},
{"Id":774223},
{"Id":25537},
{"Id":1122853},
{"Id":55756},
{"Id":625383},
{"Id":55885},
{"Id":14054},
{"Id":23809},
{"Id":542023},
{"Id":55691},
{"Id":50422},
{"Id":35654},
{"Id":1115033},
{"Id":25475},
{"Id":24799},
{"Id":33127},
{"Id":38964},
{"Id":693975},
{"Id":343305},
{"Id":342619},
{"Id":47693},
{"Id":495551},
{"Id":806239},
{"Id":320284},
{"Id":23862},
{"Id":1199670},
{"Id":398438},
{"Id":17121},
{"Id":18627},
{"Id":1062334},
{"Id":35731},
{"Id":235514},
{"Id":314650},
{"Id":48445},
{"Id":25432},
{"Id":23685},
{"Id":17944},
{"Id":36331},
{"Id":25534},
{"Id":25102},
{"Id":42746},
{"Id":51258},
{"Id":44089},
{"Id":25091},
{"Id":48487},
{"Id":625960},
{"Id":990039},
{"Id":303341},
{"Id":56229},
{"Id":365126},
{"Id":530811},
{"Id":45828},
{"Id":24841},
{"Id":470777},
{"Id":698189},
{"Id":447290},
{"Id":56032},
{"Id":46942},
{"Id":272473},
{"Id":919489},
{"Id":34118},
{"Id":56160},
{"Id":25065},
{"Id":36054},
{"Id":440963},
{"Id":25476},
{"Id":55463},
{"Id":384518},
{"Id":928067},
{"Id":1185538},
{"Id":42610},
{"Id":213674},
{"Id":26806},
{"Id":56149},
{"Id":376116},
{"Id":4890},
{"Id":47011},
{"Id":547079},
{"Id":430246},
{"Id":272279},
{"Id":297583},
{"Id":51436},
{"Id":1074333},
{"Id":326637},
{"Id":272262},
{"Id":342616},
{"Id":1112212},
{"Id":406308},
{"Id":6126},
{"Id":32965},
{"Id":43654},
{"Id":51782},
{"Id":45963},
{"Id":524255},
{"Id":47539},
{"Id":950309},
{"Id":499592},
{"Id":23758},
{"Id":55280},
{"Id":55610},
{"Id":32257},
{"Id":23702},
{"Id":914541},
{"Id":1072485},
{"Id":236779},
{"Id":420419},
{"Id":8487},
{"Id":472153},
{"Id":1278252},
{"Id":671823},
{"Id":1212481},
{"Id":245287},
{"Id":670045},
{"Id":633362},
{"Id":402992},
{"Id":23760},
{"Id":4582},
{"Id":44682},
{"Id":381734},
{"Id":364300},
{"Id":414973},
{"Id":1161606},
{"Id":15383},
{"Id":259551},
{"Id":1104703},
{"Id":308515},
{"Id":464626},
{"Id":24721},
{"Id":1170265},
{"Id":44465},
{"Id":55360},
{"Id":494847},
{"Id":453289},
{"Id":24923},
{"Id":24230},
{"Id":319746},
{"Id":633426},
{"Id":43919},
{"Id":38986},
{"Id":1206190},
{"Id":25977},
{"Id":279531},
{"Id":51218},
{"Id":52294},
{"Id":38124},
{"Id":1124282},
{"Id":42607},
{"Id":212175},
{"Id":429738},
{"Id":52928},
{"Id":1039481},
{"Id":211855},
{"Id":826915},
{"Id":5726},
{"Id":25471},
{"Id":37770},
{"Id":646181},
{"Id":25434},
{"Id":39038},
{"Id":51487},
{"Id":332978},
{"Id":25533},
{"Id":56209},
{"Id":364788},
{"Id":37237},
{"Id":24706},
{"Id":42648},
{"Id":20217},
{"Id":937673},
{"Id":47239},
{"Id":315051},
{"Id":38759},
{"Id":36308},
{"Id":216811},
{"Id":40383},
{"Id":52428},
{"Id":313526},
{"Id":26826},
{"Id":245397},
{"Id":41262},
{"Id":298197},
{"Id":48456},
{"Id":943275},
{"Id":55597},
{"Id":297524},
{"Id":779973},
{"Id":24804},
{"Id":440523},
{"Id":38965},
{"Id":596010},
{"Id":55880},
{"Id":55633},
{"Id":25109},
{"Id":951781},
{"Id":459508}];

var allData = [];

async function getPlayerData() {
    const browser = await puppeteer.launch();
    const batchSize = 10; // Adjust batch size as needed
    const allData = [];

    try {
        for (let i = 0; i < ids.length; i += batchSize) {
            const batchIds = ids.slice(i, i + batchSize);
            const batchData = await scrapeBatch(browser, batchIds);
            allData.push(...batchData);
            console.log(`Batch ${i / batchSize + 1} completed.`);
        }

        const jsonData = JSON.stringify(allData, null, 2);
        const filePath = 'players_cricket_data.json';
        fs.writeFileSync(filePath, jsonData);
        console.log('JSON data saved to', filePath);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await browser.close();
    }
}

async function scrapeBatch(browser, batchIds) {
    const batchData = [];

    for (const id of batchIds) {
        const playerData = await scrapePlayerData(browser, id);
        batchData.push(playerData);
    }

    return batchData;
}

async function scrapePlayerData(browser, id) {
    const page = await browser.newPage();
    const playerUrl = `https://stats.espncricinfo.com/ci/content/player/${id.Id}.html`;
    await page.goto(playerUrl);
    const playerHtml = await page.content();
    const $ = cheerio.load(playerHtml);
    const playerData = [];

    

    $('.ds-text-title-s').each((index, element) => {
        playerData.push($(element).text().trim());
    });


    const row = {
        id: id.Id,
        name: playerData[0],
        dob: playerData[1],
        age: playerData[2],
        batsmanType: playerData[3],
        bowlerType: playerData[4],
        playerType: playerData[5],
        country: playerData[6],
    };

    await page.close();
    return row;
}

getPlayerData();
