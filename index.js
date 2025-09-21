const { Collection } = require("discord.js");
const MusicBot = require("./src/structures/MusicClient");
const initializeCleanup = require("./src/events/Client/PremiumChecks");
const Dokdo = require("dokdo");
const client = new MusicBot();
const util = require("./src/utils/util");

client.util = new util(client);
module.exports = client;
client.connect();

client.Jsk = new Dokdo.Client(client, {
  aliases: ["dokdo", "dok", "jsk"],
  prefix: "?",
  owners: ["870179991462236170"],
});

process.env.SHELL = process.platform === "win32" ? "powershell" : "bash";

client.userSettings = new Collection();
client.color = "2b2d31";
client.emoji = {
  // music emojis
  music: "<:music:1414557915775504418> ",
  playing: "<a:Playing:1414557157071782011>",
  volumehigh: "<:volumehigh:1414559112406241421>",
  play: "<:play:1414557949053112481>",
  stop: "<:resume:1188183870298918932>",
  skip: "<:forward:1188182458903036034>",
  resume: "<:resume:1414557980002619412>",
  join: "<:join:1414568242730504255>",
  leave: "<:leave:1414568573140996128>",
  autoplay: "<:autoplay:1414557461209419878>",
  mute: "<:mute:1414557923043967067>",
  volumemiddle: "<:volumemiddle:1414559124116602954>",
  volumelow: "<:volumelow:1414559118177472522>",
  shuffle: "<:shuffle:1414558004342296689>",
  rewind: "<:rewind:1414557986835267614>",
  queue: "<:queue:1414557973602238566>",
  playlist: "<:playlist:1414557955399094363>",
  pause: "<:pause:1414557935899775066>",
  loop: "<:loop:1414557909999943711>",
  forward: "<:forward:1414591918523945083>",
  filter: "<:filter:1414592141639815218>",
  addsong: "<:autoplay:1414557461209419878>",
  replay: "<:loop:1414557909999943711>",

  // utils emojis
  extra: "<:extra:1414560788147863623>",
  role: "<:roles:1414560860218851399>",
  delete: "<:del:1414557632529825873>",
  left: "<:left:1414556389405102142>",
  right: "<:right:1414557992266760245>",
  tick: "<:yes:1414559141468311562>",
  cross: "<:no:1414557928970780785>",
  dot: "<:dot:1414557898738237440>",
  warn: "<:warn:1414559129854545952>",
  search: "<:search:1414557997639929917>",
  jump: "<:join:1414568242730504255>",
  loading: "<a:loading:1414575770612797478>",
  config: "<:config:1414557557971882089>",
  information: "<:info:1414576372378243164>",
  home: "<:home:1414576814059159572>",
  ignore: "<:ignore:1414559943700516915>",
  profile: "<:profile:1414557967600062506>",
  premium: "<:premium:1414560854417870868>",
  dnd: "<:dnd:1414560782359859361>",
  offline: "<:offline:1414560830304817162>",
  online: "<:online:1414560836160323664>",
  idle: "<:idle:1414560806754058361>",
  voice: "<:voice:1414560889637568522>",
  fun: "<:fun:1414560793533349986>",
  moderation: "<:mod:1414560818548179125>",
  pfp: "<:pfp:1414560848159969350>",
  autoresponder: "<:autoresponder:1312668357199401003>",
  insta: "<:Insta:1414557016340299807>",
  snap: "<:Snap:1414584490818539673>",
  discord: "<:discord:1414585460080115793>",
  welc: "<:welc:1414559135558533131>",
  utility: "<:utility:1414560878426193930>",
  antinuke: "<:anti:1414560776475377784>",

  // pr emojis
  ozuma: "<a:xc_boy:1170712305445642260>",
  owner: "<:Owners:1414559996833824901>",
  dev: "<:OxP:1414559991326834699>",
  admin: "<:Arrkiii:1414560034318450710>",
  staff: "<:Staffs:1414559975208128634>",
  partner: "<:Partners:1414559982602420316>",
  supporter: "<:supporter:1414559911492321360>",
  sponsor: "<:sponsor:1414559918802866237>",
  os: "<:ownerspecial:1414559930865680475>",
  vip: "<:Vips:1414559969067532349>",
  friend: "<:Homies:1414560009119072267>",
  bug: "<:Mods:1414560002701529171>",
  ownerspecial: "<:ownerspecial:1414559930865680475>",
  specialone: "<:special:1414559924947648575>",
  loveone: "<:love:<:love:1414559937274843266>>",
  arrkiii: "<:arrkiii:1414560034318450710>",
  // a to z
  a: "<:A_simper:1211571868956622878>",
  b: "<:B_simper:1211571967015129118>",
  c: "<:C_simper:1211571972014874644>",
  d: "<:D_simper:1211571975726698497>",
  e: "<:E_simper:1211571981959561227>",
  f: "<:F_simper:1211571986820767784>",
  g: "<:G_simper:1211571992847978537>",
  h: "<:H_simper:1211571998443053106>",
  i: "<:I_simper:1211572004642361414>",
  j: "<:J_simper:1211572010308730951>",
  k: "<:K_simper:1211572015912194089>",
  l: "<:L_simper:1211572021385887775>",
  m: "<:M_simper:1211572027190677524>",
  n: "<:N_simper:1211572030533664828>",
  o: "<:O_simper:1211572035751510066>",
  p: "<:P_simper:1211572041820405802>",
  q: "<:Q_simper:1211572047155568650>",
  r: "<:R_simper:1211572054520889364>",
  s: "<:S_simper:1211572059793006613>",
  t: "<:T_simper:1211572065614700585>",
  u: "<:U_simper:1211572071130468353>",
  v: "<:V_simper:1211572076486459473>",
  w: "<:W_simper:1211572081737605182>",
  x: "<:X_simper:1211572085651148801>",
  y: "<:Y_simper:1211572090310889504>",
  z: "<:Z_simper:1211572095696502794>",
};

const { Api } = require("@top-gg/sdk");
client.topgg = new Api(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzM0OTY3MDg5OTIyMDQ4NDAiLCJib3QiOnRydWUsImlhdCI6MTczNTgxNjQ3OH0.J6DEdwViWOgYqHJ1Y9NoFgmVRbfSRoLFLfl0TG-j7es",
);

client.on("messageCreate", (message) => {
  client.Jsk.run(message);
});

process.on("unhandledRejection", (reason, p) => {
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(err, origin);
});

//
