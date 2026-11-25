// The Great Christmas Geist Heist: the full story, as Tobi reads it.
// Day N opens on N December. Version key = the choice made the day before
// (day 2 uses prologue + day-1 choice, e.g. "A-B").
// Fields: p (paragraphs), widget, gate {q, a[], hint}, after (shown once the gate is solved), choices [A, B].

window.HEIST = {
  year: 2026,
  days: {

    0: { date: 1, versions: { X: {
      title: "The Great Christmas Geist Heist", kicker: "Prologue",
      p: [
        "Every year, shortly before Christmas, a train leaves Berlin heading west. On board: two people, three languages, one bag of presents and a quiet, well-founded certainty that the Deutsche Bahn will find a way to ruin it. The destination is Aachen, the only city in Germany that God actually finished, and from there Roetgen, on the edge of the Eifel, where Tobi's family has done Christmas the same way since before anyone thought to question it. Four siblings, their families, two parents, one dining table. They eat until salad becomes a fantasy. They drink until someone brings up politics, and then they drink faster. Nobody goes to bed before 3 a.m., because whoever leaves first becomes the next topic.",
        "Nobody can say exactly what makes it work. In German they call it <em>Weihnachtsgeist</em>, and Geist is also what you call a raspberry schnapps. In Polish, spirit is <em>spirytus</em>, which is 95% alcohol. In English it's simply the Christmas Spirit. Three languages, one conclusion: this family's Christmas has always been at least partly flammable.",
        "Which is why nobody noticed when, on the night of 30 November, <b>the Christmas Spirit itself went missing.</b>",
        "At 23:47, the lights in the house in Roetgen flickered once. The fridge hummed in a minor key. And on the dining table, in a perfect ring of condensation, stood a glass that nobody in this family would ever drink from. 0.2 litres. Straight-sided. Empty. Smug.",
        "In Roetgen, nobody noticed. Not yet. It was still November, and the Spirit wouldn't be missed until it was needed.",
        "But 600 kilometres east, the next evening, Tobi opens a bottle of Altbier, as one does on a Tuesday. Straight from the bottle, as he always does. He drinks.",
        "It is thin. It is the beer equivalent of small talk. It tastes like something that should be served in 0.2 litres by a waiter who never asks if you want another."
      ],
      qr: true,
      choices: ["Take a closer look at the bottle", "Call home in Roetgen"]
    } } },

    1: { date: 1, versions: {
      A: { title: "The Bottle", p: [
        "Tobi holds the bottle up to the kitchen light. Normally he wouldn't look twice at a label. Crooked, torn, half peeled off: his life runs on cheerful chaos, and labels are the least of it. But this beer tastes wrong. And when a beer tastes wrong, you look at the bottle.",
        "The label is crooked. And under the edge, something catches the light.",
        "<b>Peel back the corner of the label.</b>",
        "There. Scratched into the glass, small and neat: a single letter, <b>K</b>. And next to it, a line no brewery would ever print:",
        "<span class=\"stamp\">BER-07 · Gang 12 · Regal 3</span>",
        "To anyone else, gibberish. To a logistics man, it reads like a postcard: warehouse seven in Berlin, aisle twelve, shelf three. Somebody opened this bottle, did something to it, marked it, and put it back on the shelf with the label on crooked, because whoever it was didn't care about labels. Only about the beer.",
        "Tobi puts the bottle down. Someone has been tampering with Altbier. In Berlin. On a Tuesday.",
        "This is personal now. It isn't tampering. It's a beer-trayal."
      ], choices: ["Go to the warehouse tonight", "Pull the delivery records"] },
      B: { title: "The Call", p: [
        "Something is wrong, and it isn't the beer. Or not only the beer. Tobi calls home.",
        "Mum picks up on the fourth ring. Normally, in December, she answers the phone already mid-sentence and happy: the Christmas concert they're singing at, which of the children is coming home when, the gingerbread she's been baking with the grandchildren. Tonight she just says: \"Ach, hallo.\"",
        "Flat. Like a beer left open overnight.",
        "\"Anni was thinking,\" she says, \"maybe this year we do Christmas a bit quieter. Smaller. Just a nice, quiet evening.\"",
        "A quiet Christmas. In this family. Tobi has to sit down.",
        "\"Mum,\" he says, \"Stille Nacht is a song. Not a lifestyle.\"",
        "\"And another thing,\" Mum adds, as if it's nothing. \"This morning there was a beer coaster on the dining table. A white one, from a pub. Someone wrote a little K on it. Was that one of your siblings?\"",
        "It was not one of his siblings. Nobody in Roetgen drinks from places that hand out coasters like that."
      ], choices: ["Ask Mum to send a photo of the coaster", "Call Anni"] }
    } },

    2: { date: 2, versions: {
      "A-A": { title: "The Warehouse", p: [
        "BER-07 turns out to be a grey box in an industrial estate at the edge of the city, the kind of building that exists only on delivery notes. After dark, Tobi finds a side door that nobody has locked since about 2009. Logistics: the industry where the security system is a sign that says \"Unbefugten ist der Zutritt verboten\".",
        "Inside, it smells of cardboard and cold concrete. Rows of crates, a humming fridge unit, a forklift with a Cologne number plate. K, of course. Everything here starts with K.",
        "Aisle twelve. Shelf three. A whole pallet of Altbier, and every single label is slightly crooked, as if someone had peeled them back one by one to check something, or to add something.",
        "On the floor in front of the pallet, a ring of condensation. Tobi crouches down. It's tiny. Far too small for any glass a grown man would drink from. It's the ring of something that holds 0.2 litres and is proud of it. The circle of suspects has just got a lot smaller.",
        "Somewhere in the back, the fridge clicks off. In the silence, Tobi is quite sure that something small and glassy is listening."
      ], choices: ["Chalk two words on the door: \"I know.\"", "Slip out unseen and tell no one"] },
      "A-B": { title: "The Delivery Log", p: [
        "Breaking into a warehouse is for amateurs. A professional checks the paperwork.",
        "It takes Tobi twenty minutes, one old colleague who owes him a favour and the words \"just a quick look in the system\" to get the delivery log for BER-07, aisle 12, for the last week. Fifteen deliveries. Dates, times, drivers, cargo. Most of it is beautifully boring, the way logistics should be.",
        "Except one line."
      ], widget: "log",
        gate: { q: "Where is the odd delivery going next?", a: ["50667", "KOELN", "KÖLN", "KOLN", "COLOGNE"], hint: "Look at the postcode. Who sends anything anywhere at three in the morning?" },
        after: [
          "03:00. Driver: \"K.\" Cargo: <em>1 Geist, gently used.</em> From: 52159. Onward to: 50667. Date: to follow.",
          "52159 is Roetgen. Someone brought a spirit east in the middle of the night, from Tobi's parents' village, with incomplete paperwork. Tobi isn't sure which of these offends him most.",
          "And it isn't staying. Every postcode that starts with 50 smells faintly of Kölsch, and 50667 is the old town of Cologne itself, right under the cathedral. That's its next stop.",
        "In logistics, a delivery that isn't in the system is called a ghost shipment. This one is literal."
        ],
        choices: ["Call the depot about the 3 a.m. delivery", "Write down the driver code and say nothing"] },
      "B-A": { title: "The Coaster", p: [
        "Mum sends the photo at 07:12, with three blurred attempts before it and one of her thumb.",
        "It's a plain white beer coaster, the cheap kind from the kind of pub where the beer comes in glasses you can finish in three sips. On the front, in tiny, upright, very neat handwriting, a single letter: <b>K</b>.",
        "\"And the back,\" Mum writes. \"There's something on the back too but I can't read it without my glasses.\""
      ], widget: "coaster",
        gate: { q: "What's written on the back?", a: ["NOCHEINS", "50667", "KOELN", "KÖLN"], hint: "Hold the coaster up to a mirror. Or tilt your head a lot." },
        after: [
          "<em>Noch eins?</em> Written backwards, in mirror writing. And under it, a postcode: 50667. The old town of Cologne, right under the cathedral.",
          "A Köbes never actually says it. He just brings the next Kölsch until you put your coaster on top of your glass. So this is a coaster asking for one more: somebody has been at Mum's table, and this was only the first round. K. is from Cologne, and he isn't done.",
          "As jokes go, it's pure Cologne. Nobody else would find it funny.",
        "Then again, a coaster spends its whole life beneath a glass. No wonder this one has a grudge."
        ],
        choices: ["Ask Mum to write \"We know.\" on it and leave it out", "Tell her to hide it and act normal"] },
      "B-B": { title: "Anni", p: [
        "Anni picks up with a sigh that's already halfway to an apology.",
        "\"I know,\" she says. \"I know. A quiet Christmas. I don't know where it came from.\" She thinks about it. \"It was one evening last week. I'd had a glass of something. Light. Cold. Sort of… disappointing? And suddenly I thought: what if this year we just didn't? Didn't stay up till three, didn't do the big table. Just… had a nice quiet one.\"",
        "\"A glass of what?\" Tobi asks.",
        "\"I don't know. It was just there. On the table. Very small glass.\"",
        "Anni doesn't drink Kölsch. Nobody in this family drinks Kölsch. It's practically in the family constitution, somewhere between \"there's always too much food\" and \"the leftovers are gone four hours after dinner\".",
        "Somebody has been pouring it for them. And whoever it is wants Christmas small. Quiet. 0.2 litres of Christmas.",
        "Christmas, but Stange."
      ], choices: ["Tell her you're going after whoever did this", "Play it down. Don't let on you know"] }
    } },

    3: { date: 3, versions: {
      A: { title: "He Heard You", p: [
        "Thursday morning. Kasia left before sunrise on what her calendar calls \"a business trip\" and what she calls \"a pit of misery\". Tobi is alone in the flat, coffee in one hand, packing for Aachen with the other, because tonight, after work, he goes west.",
        "Then: a clink. From the kitchen.",
        "Not a loud one. The small, precise clink of glass against glass. The sound of something that wants to be noticed but would never admit it. Tobi gets a sinking feeling. Or rather, a clinking one.",
        "Yesterday, Tobi didn't keep quiet. He let somebody know he was on to them. And it seems somebody heard.",
        "There is nobody in the kitchen. There is nobody in the flat. But the cupboard door, the one with the beer glasses, is open by exactly one finger's width.",
        "Tobi zips up his bag. Of all the families in the Rhineland, why his?",
        "<b>Check the cupboard before you go.</b>"
      ] },
      B: { title: "He Saw Through You", p: [
        "Thursday morning. Kasia left before sunrise on what her calendar calls \"a business trip\" and what she calls \"a pit of misery\". Tobi is alone in the flat, coffee in one hand, packing for Aachen with the other, because tonight, after work, he goes west.",
        "Then: a clink. From the kitchen.",
        "Not a loud one. The small, precise clink of glass against glass.",
        "Yesterday, Tobi was careful. He said nothing, showed nothing, looked like a man with no interest whatsoever in small glasses. And still, somebody has seen straight through him. Which is rich, coming from something transparent.",
        "There is nobody in the kitchen. But the cupboard door, the one with the beer glasses, is open by exactly one finger's width.",
        "Tobi zips up his bag. Of all the families in the Rhineland, why his?",
        "<b>Check the cupboard before you go.</b>"
      ] }
    },
    choices: ["Answer whoever wrote this", "Set a trap for whoever left it"] },

    4: { date: 4, versions: {
      A: { title: "The Reply", p: [
        "Tobi's answer went out yesterday on the train west. It was short, polite and devastating. Roughly: <em>Dear Herr Klein, thank you for your letter. Kölsch is what happens when water tries to be beer and gives up halfway. Kind regards, Altbier boy.</em>",
        "By the time he wakes up the next morning, three pages have arrived. Furious ones. The handwriting starts small and gets smaller with every line, as if the writer were trying to fit his whole rage into 0.2 litres.",
        "The first rant in history written entirely in the small print."
      ], widget: "letter",
        after: [
          "Tobi reads the postscript three times. Villains always do this. They can resist everything except explaining themselves.",
          "Now he knows where the Spirit is: in a Pittermännchen, the little ten-litre barrel Cologne serves its Kölsch from. And he knows when it gets tapped: <b>23 December</b>.",
          "Twenty days. Tobi has organised harder deliveries in less time."
        ],
        choices: ["Find out who pays for an operation like this", "Find out which henchman carries the barrel"] },
      B: { title: "The Trap", p: [
        "Yesterday, before his train west, Tobi sent Mum one message: put an open bottle of Altbier on the dining table tonight, and don't touch it. No Kölsch glass in the world could walk past that without sneering.",
        "In the morning, the bottle looks untouched. But Dad, the biggest Altbier fan this side of Düsseldorf, smells it from the stairs before he's found his slippers. He sniffs the bottle once and says one word: \"Kölsch.\"",
        "An act of pure evil. Dad called Tobi before Mum could. He has never called Tobi before Mum could.",
        "Next to the bottle lies a Köbes's order coaster. Scribbled across the top in tiny letters: <em>1 Pittermännchen, Weihnachtsgeist, zum Anstich.</em>",
        "Someone has poured the Christmas Spirit into a barrel and is planning to tap it. And the strokes on the coaster aren't counting beers."
      ], widget: "tally",
        gate: { q: "When will the barrel be tapped? (day.month)", a: ["23.12", "2312", "23/12", "23DEC", "23DECEMBER", "DEC23"], hint: "One stroke per… day? Count the top row, then the bottom." },
        after: ["<b>23 December.</b> Tobi has a date. Herr Klein has a deadline. Only one of them knows the other one knows.",
        "Last orders, Herr Klein."],
        choices: ["Follow the money", "Follow the waiter who left the coaster"] }
    } },

    5: { date: 5, versions: {
      A: { title: "The Invoice", p: [
        "Saturday: the yearly Nikolaus round. Tobi and his mum go from sibling to sibling with small gifts and opinions, and this year the route goes straight through Cologne. Behind enemy lines. Herr Klein's home turf. Every second pub sign is a threat.",
        "This December, Mum is quieter than usual, like everyone in the family. But the Nikolaus round is still happening, and that counts for something. She's glad to see them all, and this year even her daughter from Freiburg has made it home, which makes it better still. At every door she gets a little lighter. At least this tradition is still alive.",
        "Tobi doesn't spill the beans. Not a word about Herr Klein, crooked labels or letters in tiny handwriting. If somebody is trying to make this family's Christmas small, Mum doesn't need to know yet. Today she's happy, and he's going to keep it that way.",
        "But he's on his toes. At every red light he checks the mirrors. Every pub they pass, he looks through the window for blue aprons. When a tram rattles by, he counts the faces. And when, at his sister's in Cologne, a friend of hers pops in with a six-pack of Kölsch and holds one out, Tobi says \"Danke, ich fahre noch,\" which is the most German way there is to say \"over my dead body\".",
        "Between two coffees and a niece, he slips out onto the balcony and digs from his phone. Operations like this cost money: warehouses, drivers, late-night deliveries. Somebody is paying. And somebody always keeps the receipts.",
        "It takes him an hour to find it: an invoice from something calling itself the <b>Kölsch Konsortium</b>, made out to \"Hr. K.\", for services rendered. The items are oddly specific."
      ], widget: "invoice",
        gate: { q: "There's more on this invoice than numbers. Read it the right way: what is it hiding?", a: ["STAEV", "STÄV", "STAV", "STAENDIGEVERTRETUNG", "STÄNDIGEVERTRETUNG", "STANDIGEVERTRETUNG"], hint: "Only the first letter of each line matters." },
        after: [
          "STÄV. The Ständige Vertretung, the Rhineland pub in Berlin, right by the Spree, where they serve Kölsch on Prussian soil like an embassy of bad taste. Herr Klein's operation isn't run from Cologne. It's run from a pub in the middle of Berlin.",
          "Ständige Vertretung means Permanent Representation. Of what, nobody in Düsseldorf has ever worked out. Bad taste, presumably. Permanently.",
          "Back inside, Mum asks why he's grinning. \"Nothing,\" says Tobi. \"Good coffee.\" He accepts a third cup, admires a drawing of a reindeer that may be a dog, and keeps his phone face down on the table.",
          "He has a plan forming. It involves an apron."
        ],
        choices: ["Plan to go undercover as a Köbes", "Ask Kasia, back home, to look around the flat"] },
      B: { title: "The Köbes", p: [
        "Saturday: the yearly Nikolaus round. Tobi and his mum go from sibling to sibling with small gifts and opinions, and this year the route goes straight through Cologne. Behind enemy lines.",
        "This December, Mum is quieter than usual, like everyone in the family. But the Nikolaus round is still happening, and that counts for something. She's glad to see them all, and this year even her daughter from Freiburg has made it home, which makes it better still. At every door she gets a little lighter. At least this tradition is still alive.",
        "Tobi doesn't spill the beans about Herr Klein. He carries bags, admires babies, eats every Spekulatius he's offered. But he's on his toes the whole day, because here, the Köbes are everywhere.",
        "Blue aprons, round trays, that particular way of putting a glass down in front of you as if it were a verdict. A Köbes never asks. He just brings. Another Kölsch, and another, until you surrender by putting your coaster on top of the glass.",
        "Between two siblings, Mum wants a quick stop at the Christmas market. The presents for the next house are already wrapped and waiting in her tote bag. It's packed at the roasted almond stall. At the stand next door, a man is pouring Kölsch and holds one out to Tobi. \"Danke, ich fahre noch,\" says Tobi, which is the most German way there is to say \"over my dead body\". <b>Meanwhile Mum's bag goes down by her feet for one minute,</b> and then they're on their way.",
        "At the next house, Mum reaches into the bag for the presents. No socks. No chocolate. She pulls out a folded blue apron, holds it up and starts laughing. \"Well, somebody's getting a surprise tonight.\"",
        "Under the apron: a Köbes order pad and a one-way ICE ticket, Köln Hbf to Berlin. Tobi takes the pad before anyone can ask. No orders on the top sheet. Just tiny handwriting:",
        "<em>No flag, no visa, still an embassy:<br>Cologne's own outpost by the Spree.<br>That's your post now. Wait, and you'll know<br>when the Spirit's set to go.</em>"
      ],
        gate: { q: "Where is the courier being sent?", a: ["STAEV", "STÄV", "STAV", "STAENDIGEVERTRETUNG", "STÄNDIGEVERTRETUNG", "STANDIGEVERTRETUNG", "DIESTAENDIGEVERTRETUNG", "DIESTÄNDIGEVERTRETUNG"], hint: "It's named after the West German mission in East Berlin." },
        after: [
          "The StäV. One of Herr Klein's waiters isn't bringing beer. He's bringing the Spirit. And his post is in Berlin.",
          "Somewhere in Cologne, Herr Klein's courier is holding a mixed bag: socks, chocolate, and no idea where he's going."
      ], choices: ["Get yourself a blue apron", "Call Kasia for backup"] }
    } },

    6: { date: 6, versions: {
      A: { title: "Undercover", p: [
        "Sunday, the train back to Berlin. Tobi has a plan, and the plan has an apron.",
        "Somewhere near Hamm, the speakers crackle, and the familiar Deutsche Bahn voice says:",
        "<em class=\"ann\">„Information zu Ihrem Anschluss: Der Nikolaus hat seinen Anschluss in Hamm verpasst. Er trifft heute Abend verspätet bei Ihnen ein. Da wir auf den Nikolaus warten, verzögert sich unsere Weiterfahrt um etwa zwanzig Minuten. Wir bitten um Entschuldigung.\"</em>",
        "So the train waits for Nikolaus. Of course it does. If Nikolaus is late, everybody is late. He'll still make it tonight. Just not on time.",
        "Nobody else in the carriage even looks up. On the Deutsche Bahn, a delay is about as surprising as rain in November. Tobi, at least, decides to make good use of the extra time. A Köbes is made, not born, and the only place to learn is on the job.",
        "So Tobi walks to the Bordbistro and asks for a tray. The woman behind the counter looks at him the way Bordbistro staff look at everyone: as if it's the end of a very long shift and he is the reason. But she hands one over. And since he's there anyway, he gets himself a beer. It won't be Altbier. It won't be Kölsch either. On a German train, that counts as neutral ground.",
        "Then the training begins. Bottle on the tray, flat hand, shoulders back, eyes forward. Down the aisle and back again, past every suitcase, over every jolt of the track. A child in seat 54 watches him with deep suspicion. Twice the bottle wobbles. Once, somewhere near Bielefeld, it nearly goes. It doesn't.",
        "And the hardest part of all: walking past forty thirsty passengers without asking a single one of them whether they'd like one too. Not even with his eyes.",
        "By Wolfsburg, he almost has it. Übung macht den Köbes. He returns the tray, sits down and finally drinks the beer. Even a Köbes gets one after his shift.",
        "<b>And if you're on that train right now: the Bordbistro is open. You've earned one too.</b>",
        "<b>When you get home tonight, check your shoes.</b>"
      ] },
      B: { title: "Kasia at Home", p: [
        "Sunday, the train back to Berlin. Somewhere after Hamm the speakers crackle, and the familiar Deutsche Bahn voice says:",
        "<em class=\"ann\">„Information zu Ihrem Anschluss: Der Nikolaus hat seinen Anschluss in Hamm verpasst. Er trifft heute Abend verspätet bei Ihnen ein. Da wir auf den Nikolaus warten, verzögert sich unsere Weiterfahrt um etwa zwanzig Minuten. Wir bitten um Entschuldigung.\"</em>",
        "So the train waits for Nikolaus. Of course it does. He'll still make it tonight. Just not on time. Then Tobi's phone buzzes. Kasia, back home in Berlin, with a photo and no words. Then, a minute later, words:",
        "\"This was in the kitchen when I got back. I didn't put it there.\"",
        "A ring of condensation. Perfectly round. Far too small. Herr Klein has been in their flat. He doesn't need a key. Nobody ever notices one more glass in a kitchen. He wasn't here to take anything. He was here to say: I know where you live.",
        "Tobi looks out of the window at Lower Saxony going past, flat and unhelpful. \"Don't touch anything,\" he writes. \"But put my shoes out. Nikolaus is late, not cancelled.\"",
        "\"Tell him I'm taken,\" Kasia writes back. \"I already have all the rings I need.\"",
        "<b>When you get home tonight, check your shoes.</b>"
      ] }
    },
    choices: ["Find out more about the enemy", "Find out how to beat him"] },

    7: { date: 7, versions: {
      A: { title: "The Past", p: [
        "Monday morning. Last night, Nikolaus made it after all. Next to the socks in Tobi's shoe was a pack of sticker paper for his mini printer. Forensic equipment, Nikolaus-style. Somebody up north clearly knows there's evidence to print.",
        "And the other gift is standing in the kitchen, catching the morning light. A proper Altbier glass, 0.25 litres, a little scratched, with a strip of paper taped to its side: <em>Herr Becher, Düsseldorf, retired.</em>",
   "Next to him, a card signed N. Tobi has already read it twice.",
        "Herr Becher started out at Schumacher, the oldest Altbier pub still running, and has watched Köbes at work since 1895, give or take. He has seen everything. Including Herr Klein.",
        "\"Klein,\" says Herr Becher, in the voice of a glass who has been to too many funerals of other glasses. \"Always the smallest on the tray. Every evening, the Köbes would load him up next to the real glasses, and every evening the guests would hold him up and say: is that it? He has spent 0.2 litres of life proving he isn't small. Now he wants your Christmas small too. Misery loves a smaller glass.\"",
        "Then he adds, darkly: \"And never trust a glass that comes in a Kranz. Nobody needs that many friends.\""
      ], widget: "mugshot",
        after: ["<b>Print the mugshot and stick it on the fridge.</b> The evidence wall is open. Herr Becher takes up his post beside it, and does not blink, because he can't."] },
      B: { title: "The Weakness", p: [
        "Monday morning. Last night, Nikolaus made it after all. Next to the socks in Tobi's shoe was a pack of sticker paper for his mini printer. Forensic equipment, Nikolaus-style. Somebody up north clearly knows there's evidence to print.",
        "And the other gift is standing in the kitchen. A proper Altbier glass, 0.25 litres, a little scratched, with a strip of paper taped to its side: <em>Herr Becher, Düsseldorf, retired.</em> He started out at Schumacher, the oldest Altbier pub still running, and has watched Köbes at work since 1895, give or take.",
        "Next to him, a card signed N. Tobi has already read it twice.",
        "\"You want to beat Klein?\" says Herr Becher. \"Then know what he can't stand. Two things. Being underestimated. And being anywhere near flavour.\"",
        "He lets that settle.",
        "\"A Kölsch glass is built for one thing: to be emptied quickly before anybody notices there wasn't much in it. Make him wait. Make him feel small. Put something with taste next to him. He'll crack.\"",
        "Klein, says Herr Becher, has always been a Stange-r to flavour."
      ], widget: "mugshot",
        after: ["<b>Print the mugshot and stick it on the fridge.</b> The evidence wall is open, with Herr Becher on guard beside it."] }
    },
    choices: ["Stake out the StäV", "Trace the Köbes's routes"] },

    8: { date: 8, versions: {
      A: { title: "The Post", p: [
        "Herr Becher's briefing, over breakfast:",
        "\"The Köbes works the StäV every evening. You can't sit in there, you'd have to drink Kölsch, and I won't allow it. But the building has a second restaurant. The Berliner Republik. Same address, right next door. Berlin beer, a view of the enemy's door, and not one cent goes to Cologne.\"",
        "A table is booked for tonight.",
        "\"One more thing,\" says Herr Becher. \"An investigator needs proper tools. On the way, you go to Dussmann. Friedrichstraße, five minutes' walk. You choose yourself a good pen. Tomorrow there will be something to draw.\"",
        "\"The pen,\" he adds, \"is mightier than the Stange.\"",
        "Tobi doesn't ask how a glass knows what happens tomorrow. Herr Becher is from Düsseldorf. They just know things.",
        "Tonight's job: watch. Eat. Don't drink Kölsch. <b>Decide now how close you want to get, and then really do it.</b>"
      ], choices: ["Watch the door from your table", "Get a closer look after dessert"] },
      B: { title: "The Route", p: [
        "Over breakfast, Herr Becher produces a receipt. His network found it under a table at the StäV. S-Bahn connections, scribbled in a hurry."
      ], widget: "receipt",
        after: [
          "Every route starts at Friedrichstraße. Every route starts at eight in the evening. Tobi follows the train of thought. And the StäV is three minutes' walk from Friedrichstraße station. His shift starts there.",
          "\"So that's where you'll be,\" says Herr Becher. \"Not inside. You'd have to drink Kölsch, and I won't allow it. Next door. The Berliner Republik. Same building, Berlin beer, a view of the door, not a cent to Cologne. A table is booked.\"",
          "\"And on the way, Dussmann. An investigator needs proper tools. You'll choose a good pen. Tomorrow there will be something to draw.\"",
          "<b>Decide now how close you want to get, and then really do it.</b>"
        ],
        choices: ["Stay put and watch", "Follow him a few steps when he leaves"] }
    } },

    9: { date: 9, versions: {
      A: { title: "You Watched", p: [
        "You stayed at your table, and you were right to.",
        "At a quarter past nine last night, the door of the StäV opened and a Köbes came out. Blue apron under his coat, as if he couldn't take it off even off duty. Under his arm: a small barrel, about the size of a loaf of bread. He stopped on the pavement and took a call. He didn't say much. Köbes never do. But through the window, between the schnitzel and the second beer, it was easy enough to read his lips:",
        "<em>\"Holzmarkt. Morgen. Am Feuer.\"</em>",
        "Holzmarkt. Tomorrow. At the fire.",
        "That's tonight. Heissa Holzmarkt, the Christmas market on the Spree, the one with the fires. Something is being handed over there.",
        "Holzmarkt: the wood market. Fitting. Herr Klein's people have always been a bit wooden.",
        "So tonight, you go. Scarves up, mulled wine in hand, two innocent people enjoying a Wednesday. Bring the new pen. Kasia has something for you too: this morning, Herr Becher handed her a sealed envelope. He can't come himself, being a glass and all, but he insists it's opened at the fire and nowhere else.",
        "<b>Find the fire. Open it there.</b>"
      ] },
      B: { title: "You Got Close", p: [
        "You followed him, and you were right to.",
        "At eight sharp last night, the Köbes left the StäV. Blue apron under his coat, as if he couldn't take it off even off duty. Under his arm: a small barrel, about the size of a loaf of bread. A few steps behind him, close enough to smell the Kölsch, Tobi heard him take a call. Köbes don't talk much. He only needed four words:",
        "<em>\"Mittwoch. Am Feuer. Holzmarkt.\"</em>",
        "Wednesday. At the fire. Holzmarkt.",
        "That's tonight. Heissa Holzmarkt, the Christmas market on the Spree, the one with the fires. Something is being handed over there.",
        "Holzmarkt: the wood market. Fitting. Herr Klein's people have always been a bit wooden.",
        "So tonight, you go. Two innocent tourists with mulled wine. Not much of a disguise, but the most convincing one there is. Bring the new pen. Kasia has something for you too: this morning, Herr Becher handed her a sealed envelope. He can't come himself, being a glass and all, but he insists it's opened at the fire and nowhere else.",
        "<b>Find the fire. Open it there.</b>"
      ] }
    },
    qr: true, choices: ["Follow the ticket", "Follow the barrel"] },

    10: { date: 10, versions: {
      A: { title: "The Ticket", p: [
        "Last night, by the fire, in the envelope: half a train ticket, torn down the middle, and a note from Herr Becher. <em>Use the new pen. Evidence needs documenting.</em> You drew the crowd around the fire, and when you looked at your drawing afterwards, exactly one figure in it wasn't drinking.",
        "At a Christmas market, the only man without a mulled wine in his hand is either driving or up to something. And nobody drives to the Holzmarkt.",
        "Where did Herr Becher get it? From the StäV cloakroom, where one of his oldest friends, a retired Altbier glass, has stood unnoticed behind the coat hooks for years. On Tuesday night, while Tobi was having dinner next door, the Köbes hung up his coat, and the old glass went through his pockets. It found half a ticket. Only half.",
        "Because Herr Klein never lets anyone carry a whole ticket. He tears every one in two and gives each half to a different courier, so nobody can be caught with the whole plan. It's an old smugglers' trick, and he's very proud of it.",
        "This morning, Tobi props his half of the ticket against the coffee machine and looks at it over his coffee. Half a ticket is like half a beer: technically something, practically useless. An ICE. Berlin Hbf. 23 December. The rest is torn off: where it's going, and in which coach. The half that matters is the half he doesn't have.",
        "Luckily, Herr Becher's network has been busy overnight. The man who wasn't drinking was the second courier. When he walked away from the fire, the other half of the ticket slipped out of his coat pocket and landed in the snow. An old Altbier glass at the mulled-wine stall next door saw it happen. Glasses notice everything. Nobody ever watches what they say in front of a glass.",
        "And the barrel itself? Herr Becher's network has that too: it went down into the StäV cellar last night, and it stays there until the 23rd.",
        "By sunrise, the second half of the ticket has made its way across Berlin, from glass to glass, the way news has always travelled in Düsseldorf's Altstadt. Here it is."
      ], widget: "ticket",
        after: [
          "<b>Hold your half up against the screen.</b> The torn edges fit together like a key in a lock.",
          "ICE. 23 December. Berlin Hbf to Köln Hbf. <b>Wagen 7.</b>",
          "That's where the Spirit is going. Wagen 7, on the 23rd, west. Who will be carrying it, and how, the ticket doesn't say. A ticket never tells you who's sitting in the seat. Only that someone will be.",
          "Tobi reads it three times. Then he checks his own booking, just to be sure, although he already knows. It's the same train he and Kasia take west to Christmas. Of all the trains in Germany, Herr Klein has chosen theirs.",
          "The Deutsche Bahn has finally found a way to make that journey even worse.",
          "Turns out every ticket has a better half."
        ],
        choices: ["Build a team", "Study the enemy first"] },
      B: { title: "The Barrel", p: [
        "Last night, by the fire, in the envelope: half a train ticket, lifted from the Köbes's coat by an old friend of Herr Becher's in the StäV cloakroom, and a note from Herr Becher. <em>Use the new pen. Evidence needs documenting.</em> You drew the crowd around the fire, and in your drawing exactly one figure wasn't drinking. He was holding a barrel the size of a loaf of bread.",
        "When he left, Tobi followed the barrel. Along the Spree, all the way to the StäV. But the man didn't go in. He stopped at the cellar hatch in the pavement and knocked twice. The hatch opened from below, and a second Köbes reached up for the barrel.",
        "For a few seconds, the barrel hung in the streetlight, and the tag on its tap swung towards Tobi. Then it was gone underground. The hatch slammed. A bolt went across.",
        "Tobi got out the new pen and wrote down every word before he could forget it. Evidence needs documenting."
      ], widget: "casktag",
        gate: { q: "Which coach is the barrel booked into?", a: ["7", "SIEBEN", "WAGEN7", "SEVEN"], hint: "How big is Herr Klein?" },
        after: [
          "Wagen 7. Köln Hbf. 23 December.",
          "Tobi takes out his half of the ticket. ICE. Berlin Hbf. 23 December. Now he has the rest.",
          "\"By train?\" he asks Herr Becher over breakfast. \"Not by lorry?\"",
          "\"Klein doesn't trust lorries,\" says Herr Becher. \"Too many Düsseldorf drivers.\"",
          "As a logistics man, Tobi finds this personally insulting. As a passenger of the Deutsche Bahn, he finds it suicidal. And it's the same train he and Kasia take west for Christmas. Of all the trains in Germany.",
          "Un-bahn-lievable."
        ],
        choices: ["Get help", "Learn everything about him first"] }
    } },

    11: { date: 11, versions: {
      A: { title: "The Team", p: [
        "You can't fight a network alone. Herr Becher makes some calls.",
        "He calls the Düsseldorf Altstadt and gives the old password, the one only real Altbier glasses know:",
        "<em>\"Köbes, donn mech doch emol e lecker Alt!\"</em>",
        "And the veterans answer. Scratched, chipped, loyal Altbier glasses who have seen things. One of them served at the cup final in '79. One of them was at Fortuna's championship party, or says he was. One of them still can't talk about Cologne without having to sit down on a coaster for a while.",
        "And with them comes Jupp. Jupp is a Köbes from the Uerige, and the grumpiest man on the Rhine. He brings you a beer whether you want one or not. He has never once asked anyone anything.",
        "Jupp is a man of few words, and most of them are \"Alt\".",
        "Herr Klein has his Köbes. Now Tobi has one too.",
        "Now that there's a team, the first job is clear: get into the StäV cellar. Problem: only staff may go down there.",
        "They're still arguing about how, when an envelope slides under the front door. No stamp, no sender. Inside, in tiny handwriting: <em>Tonight Cologne plays Fortuna. Enjoy watching your lot lose. It's good practice for the 24th.</em>",
        "\"Then we'll be there,\" says Herr Becher. \"<b>Tonight, 19:00, the Lenau-Stuben in Neukölln.</b> The back room, the Havelpralinen, as many as fit. Let him hear it. The cellar can wait one night.\" The team's first Altbier is drunk in Herr Becher's honour.",
        "After the game, Tobi lies awake. What does a glass even do with a stolen Christmas Spirit? Drink it? Keep it on a shelf? Pour it out, one small Stange at a time, just to watch it go?",
        "And under all of it, the question from this morning: how do you get into a cellar that only staff may enter?"
      ], choices: ["Get in disguised as staff", "Find someone on the inside"] },
      B: { title: "The Dossier", p: [
        "Know your enemy. Tobi takes an empty folder from the shelf and writes HERR KLEIN on the spine. It looks embarrassingly thin.",
        "Page one: the mugshot, a copy of the one on the fridge. 0.2 litres, narrow, unimpressed.",
        "Page two: the barrel. A Pittermännchen, ten litres, to be tapped in Cologne on 23 December.",
        "Page three: the StäV. The address, the opening hours, a floor plan of the Berliner Republik next door, drawn from memory.",
        "Page four: his half of the ticket, in a plastic sleeve. Berlin Hbf, 23 December. Wagen 7, underlined twice.",
        "Page five: the sketch from the fire. One figure circled in red: the only man at a Christmas market without a mulled wine.",
        "Then the reading starts. There is such a thing as the Kölsch Konvention. A treaty from 1986, signed by the Cologne breweries, defining what Kölsch is, who may brew it and how it must be served. Only Cologne would turn a beer into a matter of contract law. Tobi prints it. All of it.",
        "Herr Klein hides behind its paragraphs. Kölsch is served in the Stange, the narrow 0.2-litre glass. Which means Herr Klein isn't just a glass. He's a legally protected glass. Of course he is. Tobi underlines that bit.",
        "Herr Klein isn't just small. He's small print.",
        "And the StäV cellar? Paragraphs again. Staff only. No exceptions. Not for guests, not for inspectors, not for men from Aachen with opinions. Another page.",
        "By the afternoon, the folder won't close. Tobi puts a rubber band round it.",
        "Then an envelope slides under the front door. No stamp, no sender. Inside, in tiny handwriting: <em>Tonight Cologne plays Fortuna. Enjoy watching your lot lose. It's good practice for the 24th.</em> It goes in on top. Last page, for now."
      ], widget: "dossier",
        after: [
          "Herr Becher calls within the minute. \"Bring the dossier. <b>Tonight, 19:00, the Lenau-Stuben in Neukölln.</b> The back room, the Havelpralinen, as many as fit. Let him hear it.\"",
          "That night Tobi lies awake. What does a glass even do with a stolen Christmas Spirit? Drink it? Keep it on a shelf? Pour it out, one small Stange at a time, just to watch it go?"
        ], choices: ["Pass as a Köbes", "Find a friend in the kitchen"] }
    } },

    12: { date: 12, versions: {
      A: { title: "The Köbes Exam", p: [
        "Only staff get into the StäV cellar. So Tobi will become staff.",
        "\"You want to pass as a Köbes,\" says Herr Becher, \"you have to think like one. A Köbes knows his beer, his city, his guests, and above all, what never to say.\"",
        "He clears his throat, which for a glass is mostly a matter of attitude.",
        "\"Sixteen questions. Twenty seconds each. Pass, and the blue apron is yours.\"",
        "It's not a pub quiz. It's a pub quest."
      ], widget: "quiz-a",
        after: ["The apron fits. Tobi stands in front of the mirror, tray in hand, and practises not asking anything. Tomorrow night, the cellar."],
        choices: ["Go in tomorrow night", "Gear up at home, then go"] },
      B: { title: "The Inside Man", p: [
        "Last night, in the back room of the Lenau-Stuben. Fortuna one up at half-time, the room too warm, thirty people where twenty would be plenty. Tobi was sketching the StäV on a beer mat, trying to work out where the cellar might be.",
        "The man squeezed in next to him leaned over. Fortuna scarf, kitchen whites still on under his jacket, a faint smell of fried onions. He tapped the beer mat. \"Wrong. The cellar stairs are behind the kitchen, not the bar. I should know. I've been plating Halve Hahn in there for eleven years.\"",
        "His name is Kalle. A Düsseldorfer, eleven years in the StäV kitchen, serving people who drink Kölsch, quietly unhappy about it the way only a Düsseldorfer can be.",
        "By the final whistle they had sung every song side by side, and Kalle had bought the last round of Alt. In that back room, that counts as a background check.",
        "When Tobi told him what was in the cellar, Kalle put his Alt down. \"The cellar door's in my kitchen. I can leave it open.\" Then he narrowed his eyes. \"But Cologne has sent spies before. They all said Düsseldorf this, Altbier that. I have a test to check whether someone is a true Düsseldorfer. None of them made it past question three. You'll take my test, to prove you are who you say you are.\"",
        "His price, if you pass: one Altbier. And the cellar door left open."
      ], widget: "quiz-b",
        after: [
          "Kalle wipes something from his eye with his apron. \"Eleven years,\" he says, \"and nobody in this kitchen has spoken my language.\"",
          "Tobi can't tell if it's emotion or onions. Eleven years of chopping them for Cologne, and Kalle has cried through every single shift.",
          "\"Both,\" says Kalle. \"It's always both.\"",
          "Not an onion man, then. Just a man who suffers for his job. Tobi can sympathise. Work hasn't exactly been a party for him lately either. The cellar door will be open."
        ],
        choices: ["Strike fast", "Gear up at home, then go"] }
    } },

    13: { date: 13, versions: {
      A: { title: "The Raid", p: [
        "Sunday. Kasia's sister heads home, and in the evening it's the cinema: Home Alone, on a big screen, the way it's meant to be seen. A Christmas film about two burglars who break into a house and get outsmarted by someone who knows every inch of it. Tobi watches it like a training video.",
        "It's also the perfect alibi. Nobody suspects a man who has just been to see Home Alone.",
        "Later that night. Blue apron. Round tray. Shoulders back. Tobi walks into the StäV like he's been carrying Kölsch for thirty years, and nobody stops him, because nobody ever looks at the Köbes. That's the whole trick.",
        "Through the kitchen. Down the stairs, checking every step for paint tins and every door handle for a blowtorch. Old habits, two hours old. The cellar smells of old Kölsch and bureaucracy.",
        "And there it is. The Pittermännchen. Small, wooden, smug. Tobi lifts it.",
        "It weighs nothing. It's empty.",
        "Herr Klein moved the Spirit days ago. Of course he did. Tobi has been following a barrel. Herr Klein has been following Tobi.",
        "A wild Kölsch chase.",
        "In the corner, asleep on a crate, lies a Köbes. Apron, notebook, the works. He doesn't wake up when Tobi comes in. Nobody asked him to.",
        "So Tobi takes him along. Carefully. A Köbes is evidence."
      ], choices: ["Question the Köbes", "Search his apron"] },
      B: { title: "The Postcard", p: [
        "Sunday. Kasia's sister heads home, and in the evening it's the cinema: Home Alone, on a big screen. A Christmas film about two burglars who come to the house, and a boy who lets them.",
        "Tobi waited for the right moment to go into that cellar. Tonight was supposed to be it.",
        "Back home after the cinema, Tobi is getting ready to go in, everything set for tonight, when the doorbell rings. On the doormat stands a Köbes. Blue apron, round tray, and on the tray, instead of a Kölsch, <b>a postcard</b>. Cologne Cathedral, of course. They always send the cathedral.",
        "On the back, in that tiny, upright handwriting: <em>\"Too late, Altbier boy. Greetings from home.\"</em>",
        "Tobi thinks of Kevin. Kevin would have greased the front steps by now.",
        "A Köbes delivers and leaves. He never asks, never waits, never stays. But this one makes a mistake. He waits a second too long for a tip.",
        "So Tobi gives him one: never stand still in Berlin.",
        "And in that second, Tobi grabs him by the apron strings.",
        "Later that night, Herr Becher's network reports from the StäV. The barrel in the cellar was empty. And three Köbes sat next to it in the dark all evening, waiting for someone to walk in."
      ], widget: "postcard", choices: ["Make him talk", "Empty his pockets"] }
    } },

    14: { date: 14, versions: {
      A: { title: "The Interrogation", p: [
        "The Köbes sits on a chair in the middle of the living room, apron still on, looking at nothing. Herr Becher stands guard on the windowsill.",
        "Tobi asks: \"Where is the Spirit?\"",
        "Nothing. The Köbes doesn't even blink.",
        "\"He can't answer questions,\" says Herr Becher. \"A Köbes never asks. Forty years on the job, and he has forgotten what a question is. You have to tell him.\"",
        "So Tobi tries statements.",
        "\"You will tell me where it is.\"",
        "Nothing. Not even a twitch.",
        "\"Statements won't work either,\" says Herr Becher. \"He takes orders. Nothing else. Order it like a beer.\"",
        "Tobi clears his throat. \"Köbes! One confession, bitte!\"",
        "The Köbes nods slowly. \"Herr Klein has it,\" he says. \"He never lets it out of his sight.\" He takes a phone out of his apron and puts it on the table. One app: <em>Deutsche Bummelbahn</em>. Herr K.'s account. Locked.",
        "\"Köbes! The password, bitte!\"",
        "\"Nobody knows the password,\" says the Köbes. \"Only Herr Klein.\"",
        "Then he takes out his notebook, makes one stroke in it, and says nothing ever again."
      ], choices: ["Try to crack it yourself", "Ask Herr Becher for help"] },
      B: { title: "The Apron", p: [
        "A Köbes's apron is a world. The big front pocket holds everything a man needs to survive a twelve-hour shift on the Rhine: a wallet as fat as a sandwich, a bottle opener, a pencil worn down to a stub.",
        "Tobi goes through it slowly, the way you unpack a parcel that might bite.",
        "Change in every coin the euro has ever made. A cork. The stub of a Christmas candle. A crumpled shift plan: StäV, every evening, until the 22nd. After that, nothing.",
        "And two things that don't belong there.",
        "A beer coaster with twenty-three strokes on it. Fourteen crossed out. Tobi counts twice. Today is the fourteenth. Nine to go, and then the barrel gets tapped.",
        "And a phone. One app: <em>Deutsche Bummelbahn</em>. Herr K.'s account. Locked.",
        "The Köbes watches him take it. He doesn't protest. A Köbes never asks for anything back.",
        "\"Whatever Klein is planning,\" says Herr Becher from the windowsill, \"it's on that phone. And Klein never writes his passwords down.\"",
        "The Köbes has been caught apron-handed."
      ], choices: ["Try to crack it yourself", "Ask Herr Becher for help"] }
    } },

    15: { date: 15, versions: {
      A: { title: "The Year", p: [
        "Tobi has tried every password he can think of. KÖLSCH. STANGE. DOM. KLEIN. ALAAF. ACAB. At three in the morning he gives up and goes to bed with the phone still locked.",
        "Every year, around this time, Kasia gives him twelve photos. One from every month. You pick the best ones together, and they go on the wall. It's one of those little traditions that make a year feel like a year.",
        "<b>Kasia has the photos for you.</b> This year, there's something on the back of each one: a single letter. Not in Kasia's handwriting. Not in anyone's.",
        "Herr Becher looks at them for a long time. \"Klein locked the Spirit in a barrel,\" he says. \"But a Spirit doesn't stay quiet. It has heard every word he's said in there. The password too. It can't speak. So it reached for the one place it belongs.\"",
        "Your year. This family's year. The Spirit has been slipping a message out under the door.",
        "Tobi spreads the photos out on the floor and starts sorting. Next to them lies the Köbes's phone. Locked."
      ] },
      B: { title: "The Year", p: [
        "In the morning, Herr Becher is still on the windowsill, exactly where he was last night, staring at the locked phone. He has clearly been thinking.",
        "\"Klein locked the Spirit in a barrel,\" he says. \"But a Spirit doesn't stay quiet. It has heard every word he's said in there. It's been hiding something in your memories. Look carefully.\"",
        "Then Kasia reaches for the drawer. Every year, around this time, she gives Tobi twelve photos. One from every month. You pick the best ones together, and they go on the wall.",
        "<b>Kasia has the photos for you.</b> This year, there's something on the back of each one: a single letter. Not in Kasia's handwriting. Not in anyone's.",
        "Locked in Klein's barrel, the Spirit has heard the password. It can't speak. So it reached for the one place it belongs: this family's year. A hostage, slipping a message out under the door.",
        "Next to the photos lies the Köbes's phone. Locked."
      ] }
    },
    widget: "bahn",
    after: [
      "The app opens. Herr Klein's train account. Of all the passwords in the world, he chose the one he was sure no one from Cologne would ever type.",
      "Inside: one booking. Herr Klein isn't sending the Spirit. He's carrying it himself. <b>23 December. Wagen 7.</b>",
      "Which leaves one problem: there is still a Köbes in the living room. He hasn't moved since Sunday. He hasn't eaten, hasn't slept, hasn't asked for anything, because a Köbes never asks. He's just been sitting on that chair in the middle of the living room, quietly keeping count.",
      "Herr Becher knows what to do. Every Köbes in the Rhineland obeys one signal, and one signal only. Tobi pours himself a glass, drinks half, and puts a beer mat on top of it.",
      "The Köbes nods. Makes one last stroke on his coaster. Puts on his coat, and leaves without a word. Deckel drauf. Case closed, at least for him.",
      "The photos go on the wall, as every year. This year, they're also evidence.",
      "Somewhere in Berlin, in a barrel, the Spirit is holding on. And now it knows somebody is listening.",
        "Twelve months, twelve letters. The year has literally spelled it out."
    ],
    choices: ["Hunt him down now", "Prepare the ambush for the 23rd"] },

    16: { date: 16, versions: {
      A: { title: "The Hunt", p: [
        "Kasia has gone home to Poznań, to have Christmas with her own family a week early, since on the 24th she'll be at the big table in Roetgen. Tobi stays in Berlin and hunts alone.",
        "The facts: Herr Klein boards in Berlin on the 23rd. Which means that right now, he's somewhere in Berlin. Why wait a week, when you can grab him first?",
        "The Köbes's phone still holds Herr Klein's train account, and the account remembers everything. Not just the big trip on the 23rd. Dozens of little ones, all S-Bahn: Friedrichstraße, Jannowitzbrücke, Ostkreuz, Alexanderplatz, Warschauer Straße. Herr Klein gets around.",
        "So after work, Tobi sets off to check every one of them.",
        "At Friedrichstraße, the S-Bahn is cancelled. At Alexanderplatz: <em>+20 min.</em> At Ostkreuz, a train pulls in, stops, and announces that it is now running in reverse carriage order, which is the Bahn's way of saying the train exists but has decided to face the other way. At Jannowitzbrücke: replacement bus. At Warschauer Straße, Tobi waits so long he starts to recognise the pigeons.",
        "Delays happen. In Berlin, a late S-Bahn is practically a landmark. But not like this. Every single train, on every single line Herr Klein has ever used, one after another, in perfect order.",
        "Even for the S-Bahn, that is suspiciously consistent.",
        "Tobi is on track. The trains, apparently, are not."
      ], choices: ["Expose the mole", "Turn the delays against him"] },
      B: { title: "The Ambush Plan", p: [
        "Kasia has gone home to Poznań, to have Christmas with her own family a week early, since on the 24th she'll be at the big table in Roetgen. Tobi and Herr Becher plan alone at home.",
        "\"You don't fight Klein on the 23rd,\" says Herr Becher. \"You can't. Wagen 7 will be full of his Köbes, and he never lets go of that barrel. You swap it. A decoy. Same barrel on the outside, something else on the inside. He rides on to Cologne guarding a fake, and we get off with the Spirit.\"",
        "It's a good plan. It's a logistics plan. Tobi wants to tell Kasia.",
        "He calls her. She picks up on the train to Poznań. \"Hi, so, listen,\" he says, \"Herr Becher thinks we should…\"",
        "A click. And then, instead of Kasia, a voice Tobi knows far too well:",
        "<em class=\"ann\">„Information zu Ihrem Gespräch: Dieses Gespräch endet hier. Wir bitten um Entschuldigung.\"</em>",
        "The line goes dead. He tries again.",
        "<em class=\"ann\">„Der gewünschte Gesprächspartner ist zurzeit nicht erreichbar.\"</em>",
        "He tries a third time. The same voice:",
        "<em class=\"ann\">„Ihre Verbindung nach Posen verzögert sich auf unbestimmte Zeit.\"</em>",
        "Somebody is listening. And whoever it is, they speak fluent Deutsche Bahn."
      ], choices: ["Find out who's doing this", "Fight back with delays of your own"] }
    } },

    17: { date: 17, versions: {
      A: { title: "The Announcements", p: [
        "Tobi makes a list. Five stations from last night. Five delay announcements, all in the same smug voice, all with the same tiny pause before the number, as if the speaker were enjoying it:"
      ], widget: "announcements",
        gate: { q: "Who is the mole working for? (one word)", a: ["KOELN", "KÖLN", "KOLN", "COLOGNE"], hint: "11 = K. The alphabet has 26 letters." },
        after: [
          "K. O. E. L. N.",
          "So that's why every train was late. It wasn't bad luck, and it wasn't even the usual chaos. <b>The Deutsche Bahn is working for Herr Klein.</b>",
          "Not the drivers, not the conductors, not the woman in the Bordbistro. The voice. The voice of the station announcements, the one every German has heard ten thousand times. \"Wir bitten um Entschuldigung.\" It has never meant it. Herr Klein has the Bahn's own voice in his pocket, and it delays every train Tobi needs.",
          "The mole was hiding in plain sound.",
          "Herr Becher, who has spent 130 years in train stations' worth of pubs, isn't even surprised. \"Of course,\" he says. \"Who else is always late, never sorry and always from somewhere else?\""
        ],
        choices: ["Call his bluff", "Wait for his next move"] },
      B: { title: "The Counter-Delay", p: [
        "Tobi still doesn't know who cut off his call to Kasia. He only knows what it sounded like: a station announcement. A voice that apologised for ending it.",
        "Whoever it is, they fight with delays. And whoever it is, they're on Herr Klein's side. Fine. Two can play that game. Tobi is a logistics man. He knows exactly how to make something not arrive.",
        "Herr Klein has henchmen in Berlin: Köbes, drivers, the little glasses who did the dirty work in the warehouse. Tobi books them all a trip. Berlin to Cologne. Regional trains only, change in Magdeburg, Hannover, Hamm and Hagen, never more than four minutes to make a connection.",
        "Then he puts each ticket in an envelope with an order, in the smallest, most upright handwriting he can manage: <em>Report to Cologne at once. Take exactly this train. Herr Klein, 0,2 l</em> A Köbes never asks. He just follows orders.",
        "They board this morning.",
        "They are never heard from again.",
        "A one-way ticket to nowhere. Also known as a Regionalbahn.",
        "And somebody is furious. At 16:12, every station in Berlin plays the same announcement, in a voice shaking with rage: \"Sehr geehrte Fahrgäste, wir bitten NICHT um Entschuldigung.\"",
        "Tobi knows that voice. He's heard it all month. In Hamm, holding a whole train for Nikolaus. On every platform where his train didn't come. On his phone, ending his call.",
        "That's when it clicks. The mole isn't a person. It's the voice of the station announcements, the one voice in Germany that is everywhere, always late and never sorry. <b>The Deutsche Bahn is working for Herr Klein.</b> That's why every train Tobi needed was late, and why the station voice cut into his call to Kasia.",
        "The mole was hiding in plain sound."
      ], choices: ["Go on the offensive", "Lie low"] }
    } },

    18: { date: 18, versions: {
      A: { title: "Calling His Bluff", p: [
        "Tobi sends one message to the number on the Köbes's phone. Short. \"I know about the trains. I know about the voice. Where are you?\"",
        "The answer comes within a minute. A photo. And under it, in Herr Klein's tiny letters:",
        "<em>\"Grüße vom Weihnachtsmarkt am Dom! Home at last, and your Spirit with me. That ticket you found in my Bummelbahn account, the 23rd, Wagen 7? A decoy, Altbier boy. You can stop looking.\"</em>"
      ], widget: "photo" },
      B: { title: "Herr Klein Writes First", p: [
        "Tobi lies low. He doesn't have to wait long.",
        "Friday evening, the Köbes's phone lights up in the kitchen. Unknown number.",
        "Of course. The Köbes Tobi let go on Tuesday went straight back to Herr Klein, and a Köbes reports everything. Herr Klein knows exactly whose hands that phone is in now. This message isn't for his Köbes. It's for Tobi.",
        "A photo. And under it, in Herr Klein's tiny letters:",
        "<em>\"Grüße vom Weihnachtsmarkt am Dom! Home at last, and your Spirit with me. That ticket you found in my Bummelbahn account, the 23rd, Wagen 7? A decoy, Altbier boy. You can stop looking.\"</em>"
      ], widget: "photo" }
    },
    after: [
      "Tobi looks at it for a long time. Herr Klein, posing on a table, at a Christmas market, in Cologne. Supposedly. If it's true, Wagen 7 is a dead end and the Spirit is already gone.",
      "No cathedral anywhere. You'd think a man from Cologne would get the cathedral into a photo. It's the only thing they've got. It took them 632 years to build it, because even God needed that long to find something nice to say about the place.",
        "No Dom. Tobi is Dom-founded.",
      "And the longer he looks, the less it fits. The Christmas market by the cathedral is on a square, between stone and souvenir shops. This one is right on a river.",
      "Then the bridge in the background. Cologne's railway bridge over the Rhine is steel, a long grey arch covered in love locks. This one is old brick, arch after arch, with a lit-up train rattling across it.",
      "And one more thing. A man who is safely home with his loot doesn't write to tell you to stop looking. People only say \"you can stop looking\" when they're worried you'll find something.",
      "Herr Becher, who has been reading over Tobi's shoulder, says nothing. But he has the look of a glass who has seen a lot of bluffs in his time, and is now looking at another one."
    ],
    choices: ["Look closely at the photo", "Answer him"] },

    19: { date: 19, versions: {
      A: { title: "The Background", p: [
        "Herr Becher has never trusted photographs. \"Every picture remembers where it was taken,\" he says. \"You just have to ask it.\"",
        "Tobi opens the photo again."
      ], widget: "photo-info",
        gate: { q: "Where was the photo really taken?", a: ["HOLZMARKT", "JANNOWITZ", "BERLIN", "SPREE", "HEISSA"], hint: "Tap the ⓘ. Copy the coordinates into your map app." },
        after: [
          "The pin drops on the Spree. Holzmarkt. Right by the fire where you and Kasia stood ten days ago with mulled wine and a sealed envelope.",
          "A glass from Cologne has never heard of metadata.",
        "Herr Klein has been caught Spree-handed.",
          "Herr Klein never left Berlin. The \"Cologne\" photo, the \"decoy booking\": all a bluff to make Tobi give up on the train. He's here, and the booking is real. On the 23rd, he'll be in Wagen 7.",
          "And so will you."
        ],
        choices: ["Build the decoy barrel", "Prepare the bait"] },
      B: { title: "The Pun-off", p: [
        "Tobi doesn't argue. He answers in kind. Three languages, one pun, perfectly suited to a glass:",
        "<em>\"I see right through you. Ich durchschaue dich. Przejrzałem cię.\"</em>",
        "It's the same joke in all three. Herr Klein, who speaks only Kölsch and a little bit of Hochdeutsch when he has to, can't stand not getting a joke. So he does what he always does when something is too big for him: he looks it up.",
        "He opens a translation app. The app, being helpful, asks: <em>„Übersetzer möchte deinen Standort verwenden.\"</em> Herr Klein, being Herr Klein, taps \"Erlauben\" without reading.",
        "And the Köbes's phone in Tobi's kitchen shows a new notification. <em>Shared location: Berlin-Mitte, Holzmarktstraße.</em>",
        "Herr Klein never left Berlin. The photo, the cathedral that wasn't there, the \"decoy booking\": all a bluff to make Tobi give up on the train. He's here, and the booking is real. On the 23rd, he'll be in Wagen 7 himself."
      ], choices: ["Prepare a fake barrel", "Offer him something he can't resist"] }
    } },

    20: { date: 20, versions: {
      A: { title: "The Decoy", p: [
        "Herr Becher explains the plan, slowly, the way you explain a forklift to an intern.",
        "\"Klein never lets go of his Pittermännchen. Wagen 7 will be full of his Köbes. If you grab the barrel, there's a fight on a moving train, someone pulls the emergency brake, and you spend Christmas in Bielefeld. Nobody deserves that. So we don't grab. We swap.\"",
        "The decoy arrives through Herr Becher's network the same evening: a small Düsseldorf oak cask, the kind they still tap with a wooden mallet in the Altstadt. On the outside, painted and labelled and scuffed, it is an exact copy of a Cologne Pittermännchen. On the inside, it's full of Altbier.",
        "\"Why not water?\" asks Tobi.",
        "\"Because,\" says Herr Becher, and for the first time in 130 years, he smiles, \"on the 23rd, somewhere in Cologne, someone is going to tap that barrel in front of a lot of people.\"",
        "Logistics, finally, at its finest. Herr Klein won't notice until it's far too late, and far too tasty.",
        "\"You still think this is about beer,\" says Herr Becher. \"It never was. Ask yourself what your family has that he doesn't.\"",
        "The perfect cask of mistaken identity."
      ], choices: ["Celebrate early", "Keep watch"] },
      B: { title: "The Bait", p: [
        "\"Klein never lets go of his barrel,\" says Herr Becher. \"Unless he's distracted. And there is exactly one thing in this world that distracts him.\"",
        "He pauses for effect.",
        "\"Me.\"",
        "The plan: on the 23rd, Herr Becher sits alone in Wagen 7. A retired Altbier glass, 0.25 litres, freshly filled, on a table, minding his own business. Everything Herr Klein ever wanted to be and never was. Herr Klein won't be able to stop himself. He'll have to come over and sneer.",
        "And while he's busy sneering, Tobi swaps his barrel for the decoy, an exact copy, Altbier inside.",
        "\"Aren't you afraid?\" Tobi asks.",
        "\"I've been in Düsseldorf pubs on carnival Monday,\" says Herr Becher. \"Nothing frightens me any more.\"",
        "\"You still think this is about beer,\" says Herr Becher. \"It never was. Ask yourself what your family has that he doesn't.\"",
        "A glass half full of courage, and the other half too."
      ], choices: ["Take tomorrow off", "Stay on guard"] }
    } },

    21: { date: 21, versions: {
      A: { title: "Love Actually Night", p: [
        "The plan is set. Tonight is the one evening a year that isn't up for negotiation: burgers, and Love Actually.",
        "Kasia puts the film on. The opening music starts. And then, instead of Hugh Grant: a brass band. Men in feathered hats. A man dressed as a farmer, a man dressed as a virgin, and a man dressed as a prince throwing sweets at a crowd. <em>Die Geschichte des Kölner Karnevals, Teil 1 von 3.</em> Running time: 3 hours, 12 minutes.",
        "Herr Klein's pettiest move yet. He swapped the film.",
        "Kasia spots it just in time and finds the real one.",
        "Then, finally, the evening it was meant to be. Burgers on the sofa, ketchup on a cushion, the airport arrivals at the start, the cue cards on the doorstep, the lobster in the nativity play. They've seen it so many times they could mouth along, and they still watch every minute. Well. Mostly Kasia.",
        "For two hours, there is no Herr Klein. No barrel, no Köbes, no Wagen 7. Just the two of them and a film Kasia loves, and Tobi loves her enough to love the tradition too. Which, Tobi thinks somewhere around the wedding scene, is exactly the thing Herr Klein is trying to steal.",
        "<b>No puzzle tonight. Burgers. Film.</b>",
        "Love Actually. Not Kölsch-ually."
      ] },
      B: { title: "Love Actually Night", p: [
        "Good thing you stayed on guard.",
        "Tonight is the one evening a year that isn't up for negotiation: burgers, and Love Actually. And when Tobi walks into the living room, there's a Köbes in front of the TV, remote in hand. Love Actually is queued up and paused on the first frame. The Köbes is halfway through typing into the YouTube search bar: <em>Die Geschichte des Kölner Karnevals, Teil 1 von 3.</em> Running time: 3 hours, 12 minutes.",
        "The Köbes freezes. A Köbes never asks, so he can't ask for mercy either. He just puts the remote down, makes a stroke on his coaster, and leaves.",
        "Then, finally, the evening it was meant to be. Burgers on the sofa, ketchup on a cushion, the airport arrivals at the start, the cue cards on the doorstep, the lobster in the nativity play. They've seen it so many times they could mouth along, and they still watch every minute. Well. Mostly Kasia.",
        "For two hours, there is no Herr Klein. No barrel, no Köbes, no Wagen 7. Just the two of them and a film Kasia loves, and Tobi loves her enough to love the tradition too. Which, Tobi thinks somewhere around the wedding scene, is exactly the thing Herr Klein is trying to steal.",
        "<b>No puzzle tonight. Burgers. Film.</b>",
        "Love Actually. Not Kölsch-ually."
      ] }
    },
    choices: ["Pack Altbier as the weapon", "Pack his goulash as the weapon"] },

    22: { date: 22, versions: {
      A: { title: "Morje Sticke", p: [
        "In the morning, a message from Herr Becher's network. Just two words:",
        "<span class=\"stamp\">morje Sticke</span>",
        "Tobi doesn't need it explained. When the Uerige in Düsseldorf hangs out the board with those two words, every Altstadt regular knows what's coming. Tomorrow the board gets turned round, and the other side says <em>hütt Sticke</em>: today. Among Herr Becher's old glasses, it means something else: tomorrow, we strike.",
        "And the weapon: a Düsseldorf Christmas Altbier. Brewed only at this time of year, darker and stronger than the rest. There's an old Altstadt legend about it, which Herr Becher tells in a low voice. Pour it into a Kölsch glass, and for the first time in his life, he'll feel full.",
        "The decoy saves the Spirit. This beer is for Herr Klein himself.",
        "Revenge is a dish best served cold. This one is served at cellar temperature.",
        "Pack your bags. Herr Becher refuses to travel in a bag; he'll make his own way. Tomorrow, you go west."
      ], choices: ["Strike before Cologne", "Strike at Köln Hbf"] },
      B: { title: "The Recipe", p: [
        "In the morning, the signal from Düsseldorf's Altstadt reaches you too, passed from glass to glass through Herr Becher's network all the way to Berlin. Just two words:",
        "<span class=\"stamp\">morje Sticke</span>",
        "It's the board the Uerige hangs out the day before the Sticke. Tomorrow it gets turned round, and the other side says <em>hütt Sticke</em>: today. Among Herr Becher's old glasses, it means: tomorrow, we strike.",
        "But Tobi has his own idea about weapons. A Spirit has been locked in a barrel for three weeks. It's cold, it's confused, and it's surrounded by Kölsch. What does it want more than anything?",
        "Home.",
        "So Tobi will cook. His beef goulash: slow, dark, the kind that takes all afternoon and fills every corner of the flat. And then the touch nobody else would ever think of, the one that makes people stop mid-bite and ask what that is: a dash of maple syrup. Sweet, smoky, a little bit wrong, completely right. Very Tobi.",
        "It smells so much like home, so much like the big table in Roetgen at 2 a.m., that the Spirit will follow it out of any barrel in the world.",
        "The way to a Spirit's heart is through its stomach.",
        "Pack your bags. Herr Becher refuses to travel in a bag; he'll make his own way. Pack the goulash, in the biggest jar you own. Tomorrow, you go west."
      ], choices: ["Move in early", "Wait for the perfect moment"] }
    } },

    23: { date: 23, versions: {
      "A-A": { title: "Hütt Sticke", p: [
        "Overnight, the board at the Uerige has been turned round. The network passes on the other side, just two words: <span class=\"stamp\">hütt Sticke</span> Today, the secret. Today, we strike.",
        "Berlin Hbf. The ICE is late, of course, and when it finally rolls in, the carriages are in reverse order, of course, so half the platform has to run the length of the train with their suitcases. Tobi doesn't mind. Somewhere on this train sits Herr Klein, 0.2 litres, with the Spirit in a barrel on his lap.",
        "You find your seats, stow your bags, the doors beep, and Berlin starts sliding past the window. Wagen 7 is a few carriages down.",
        "Herr Becher is already on board. He doesn't travel in bags. He went ahead the old way, glass to glass through the network, and spent the night on the shelf in the Bordbistro, polished and filled with Christmas Altbier. He's the bait, and bait should look its best.",
        "Tobi gets himself a coffee from the Bordbistro and strolls down the train like a man looking for the toilet. Wagen 7. Herr Klein sits by the window with his Pittermännchen on his lap, smugger than ever, surrounded by Köbes pretending to read newspapers. As far as Herr Klein knows, his bluff worked. The Cologne photo, the \"decoy\" booking: by now Tobi must think he's long gone. Nobody is looking for him on this train, and if anyone were, there are six Köbes between him and the aisle. Tobi takes a seat two rows behind.",
        "Tobi doesn't wait. Herr Becher goes in, full to the brim, and takes the seat opposite Herr Klein. Herr Klein stares. An old, scratched Altbier glass, on his way home for Christmas. Retired. Harmless. Beneath him. He sneers. He can't help himself. And while he's sneering, Tobi swaps the barrels.",
        "Then the train brakes hard. <em>„Verzögerung im Betriebsablauf.\"</em> Both barrels roll down the aisle, and for one horrible moment nobody knows which is which.",
        "Herr Becher does. He can smell Kölsch through oak.",
        "Tobi grabs the right one and slips away through the bistro carriage. Somewhere between Berlin and Cologne, the Spirit is saved.",
        "Not bad for a bunch of Alt men.",
        "And Herr Klein is still in Wagen 7, holding a barrel of Altbier, with Herr Becher, full of Christmas Altbier, looking at him across the table.",
        "<b>Kasia has something for you:</b> a bottle of Düsseldorf Christmas Altbier. Open it now. Let's celebrate setting the Spirit free."
      ] },
      "B-A": { title: "Hütt Sticke", p: [
        "Overnight, the board at the Uerige has been turned round. The network passes on the other side, just two words: <span class=\"stamp\">hütt Sticke</span> Today, the secret. Today, we strike.",
        "Berlin Hbf. The ICE is late, of course, and when it finally rolls in, the carriages are in reverse order, of course, so half the platform has to run the length of the train with their suitcases. Tobi doesn't mind. Somewhere on this train sits Herr Klein, 0.2 litres, with the Spirit in a barrel on his lap.",
        "You find your seats, stow your bags, the doors beep, and Berlin starts sliding past the window. Wagen 7 is a few carriages down.",
        "Herr Becher is already on board. He doesn't travel in bags. He went ahead the old way, glass to glass through the network, and spent the night on the shelf in the Bordbistro, polished and filled with Christmas Altbier. He's the bait, and bait should look its best.",
        "Tobi gets himself a coffee from the Bordbistro and strolls down the train like a man looking for the toilet. Wagen 7. Herr Klein sits by the window with his Pittermännchen on his lap, smugger than ever, surrounded by Köbes pretending to read newspapers. As far as Herr Klein knows, his bluff worked. The Cologne photo, the \"decoy\" booking: by now Tobi must think he's long gone. Nobody is looking for him on this train, and if anyone were, there are six Köbes between him and the aisle. Tobi takes a seat two rows behind. The goulash is in his bag, still warm-ish.",
        "Tobi doesn't wait. Herr Becher goes in, full to the brim, and takes the seat opposite Herr Klein. Herr Klein stares. An old, scratched Altbier glass, on his way home for Christmas. Retired. Harmless. Beneath him. He sneers. He can't help himself. And while he's sneering, Tobi swaps the barrels.",
        "Then the train brakes hard. <em>„Verzögerung im Betriebsablauf.\"</em> Both barrels roll down the aisle, and for one horrible moment nobody knows which is which.",
        "Herr Becher does. He can smell Kölsch through oak.",
        "Tobi grabs the right one and slips away through the bistro carriage.",
        "Back at his seat, Tobi lifts the lid. The Spirit doesn't move. Three weeks in the dark, surrounded by Kölsch, will do that to anyone.",
        "Then Tobi opens the goulash. Beef, paprika, that dash of maple syrup: the smell of the big table in Roetgen at 2 a.m. It drifts over the seats, and the Spirit follows it, out of the barrel and into the jar. It's going home to Roetgen with them, the way Christmas should travel. In a jar of goulash.",
        "Not bad for a bunch of Alt men.",
        "And Herr Klein is still in Wagen 7, holding a barrel of Altbier, with Herr Becher, full of Christmas Altbier, looking at him across the table.",
        "<b>Kasia has something for you:</b> a bottle of Düsseldorf Christmas Altbier. Open it now. Let's celebrate setting the Spirit free."
      ] },
      "A-B": { title: "Hütt Sticke", p: [
        "Overnight, the board at the Uerige has been turned round. The network passes on the other side, just two words: <span class=\"stamp\">hütt Sticke</span> Today, the secret. Today, we strike.",
        "Berlin Hbf. The ICE is late, of course, and when it finally rolls in, the carriages are in reverse order, of course, so half the platform has to run the length of the train with their suitcases. Tobi doesn't mind. Somewhere on this train sits Herr Klein, 0.2 litres, with the Spirit in a barrel on his lap.",
        "You find your seats, stow your bags, the doors beep, and Berlin starts sliding past the window. Wagen 7 is a few carriages down.",
        "Herr Becher is already on board. He doesn't travel in bags. He went ahead the old way, glass to glass through the network, and spent the night on the shelf in the Bordbistro, polished and filled with Christmas Altbier. He's the bait, and bait should look its best.",
        "Tobi gets himself a coffee from the Bordbistro and strolls down the train like a man looking for the toilet. Wagen 7. Herr Klein sits by the window with his Pittermännchen on his lap, smugger than ever, surrounded by Köbes pretending to read newspapers. As far as Herr Klein knows, his bluff worked. The Cologne photo, the \"decoy\" booking: by now Tobi must think he's long gone. Nobody is looking for him on this train, and if anyone were, there are six Köbes between him and the aisle. Tobi takes a seat two rows behind.",
        "Herr Becher takes a table across the aisle from Herr Klein, full to the brim, minding his own business. Herr Klein glances over and dismisses him at once: an old, scratched Altbier glass on his way home for Christmas. Retired. Harmless. Tobi waits. Wolfsburg comes and goes. Then Hannover. Then the moment comes rattling down the aisle: the minibar trolley, pushed by a trainee who is serving everything wrong. Coffee in a beer cup. A beer without a coaster.",
        "A Köbes cannot watch a drink being served badly. Every Köbes in Wagen 7 folds his newspaper and gets up to help.",
        "For one moment, Herr Klein is alone with Herr Becher. Klein can't help himself. He leans over to sneer. That moment is all Tobi needs. He swaps the barrels.",
        "Tobi slips away through the bistro carriage with the real one. Somewhere after Hannover, the Spirit is saved.",
        "And Herr Klein rides on to Cologne, guarding a barrel of Altbier as if it were the crown jewels. Which it is! At Köln Hbf he'll step off proudly onto platform 4 and wait for his connection to the Anstich.",
        "He's got the barrel. He's missed the point.",
        "<b>Kasia has something for you:</b> a bottle of Düsseldorf Christmas Altbier. Open it now. Let's celebrate setting the Spirit free."
      ] },
      "B-B": { title: "Hütt Sticke", p: [
        "Overnight, the board at the Uerige has been turned round. The network passes on the other side, just two words: <span class=\"stamp\">hütt Sticke</span> Today, the secret. Today, we strike.",
        "Berlin Hbf. The ICE is late, of course, and when it finally rolls in, the carriages are in reverse order, of course, so half the platform has to run the length of the train with their suitcases. Tobi doesn't mind. Somewhere on this train sits Herr Klein, 0.2 litres, with the Spirit in a barrel on his lap.",
        "You find your seats, stow your bags, the doors beep, and Berlin starts sliding past the window. Wagen 7 is a few carriages down.",
        "Herr Becher is already on board. He doesn't travel in bags. He went ahead the old way, glass to glass through the network, and spent the night on the shelf in the Bordbistro, polished and filled with Christmas Altbier. He's the bait, and bait should look its best.",
        "Tobi gets himself a coffee from the Bordbistro and strolls down the train like a man looking for the toilet. Wagen 7. Herr Klein sits by the window with his Pittermännchen on his lap, smugger than ever, surrounded by Köbes pretending to read newspapers. As far as Herr Klein knows, his bluff worked. The Cologne photo, the \"decoy\" booking: by now Tobi must think he's long gone. Nobody is looking for him on this train, and if anyone were, there are six Köbes between him and the aisle. Tobi takes a seat two rows behind. The goulash is in his bag, still warm-ish.",
        "Herr Becher takes a table across the aisle from Herr Klein, full to the brim, minding his own business. Herr Klein glances over and dismisses him at once: an old, scratched Altbier glass on his way home for Christmas. Retired. Harmless. Tobi waits. Wolfsburg comes and goes. Then Hannover. Then the moment comes rattling down the aisle: the minibar trolley, pushed by a trainee who is serving everything wrong. Coffee in a beer cup. A beer without a coaster.",
        "A Köbes cannot watch a drink being served badly. Every Köbes in Wagen 7 folds his newspaper and gets up to help.",
        "For one moment, Herr Klein is alone with Herr Becher. Klein can't help himself. He leans over to sneer. That moment is all Tobi needs. He swaps the barrels.",
        "Back at his seat, Tobi lifts the lid. The Spirit doesn't move. Three weeks in the dark, surrounded by Kölsch, will do that to anyone.",
        "Then Tobi opens the goulash. Beef, paprika, that dash of maple syrup: the smell of the big table in Roetgen at 2 a.m. It drifts over the seats, and the Spirit follows it, out of the barrel and into the jar. It's going home to Roetgen with them, the way Christmas should travel. In a jar of goulash.",
        "And Herr Klein rides on to Cologne, guarding a barrel of Altbier as if it were the crown jewels. Which it is! At Köln Hbf he'll step off proudly onto platform 4 and wait for his connection to the Anstich.",
        "He's got the barrel. He's missed the point.",
        "<b>Kasia has something for you:</b> a bottle of Düsseldorf Christmas Altbier. Open it now. Let's celebrate setting the Spirit free."
      ] }
    },
    choices: ["Fill him with Altbier", "Leave him on the platform, waiting for a connection. Forever."] },

    24: { date: 24, versions: {
      A: { title: "Full at Last", p: [
        "Roetgen. The big table. Four siblings, their families, two parents. And, in spirit at least, a scratched Altbier glass from Düsseldorf, who is back home on his shelf in Berlin and sends a correction via the network every time someone tells the story wrong.",
        "The Spirit is back. You can feel it. The talking until 3 a.m. The drinking. Someone brings up politics, and everyone drinks faster. By day three, everyone dreams of salad.",
        "And somewhere between the second helping and the third bottle, Tobi finally understands why Herr Klein came for this family's Spirit, of all the Spirits in the Rhineland.",
        "It was never about the food. Or the presents, or the (crooked) tree, or the decorations. Plenty of families have more of all that. It's that this family gets it. Christmas here isn't about what's on the table, it's about who's around it. Everyone together, talking too loudly and staying up too late, in the very best of spirits. That's the real thing. That's the whole point of Christmas, and this family has always known it.",
        "A Spirit like that is the rarest thing there is. And it's exactly what a small, cold, empty glass would want most, and could never have.",
        "And word comes from Cologne. At Herr Klein's big Anstich, the barrel was tapped in front of everyone. Out came Düsseldorf Altbier. On Christmas. In Cologne. The video is already going round the family chat.",
        "Herr Klein himself, filled to the brim with Christmas Altbier, feels full for the first time in his life. He's quieter now. Almost content. He stays in Cologne, where he belongs.",
        "Late that night, when the table finally goes quiet, a message arrives from Herr Becher. He got off at Düsseldorf Hbf yesterday, to spend Christmas in the Altstadt with old friends. He'll be back on the shelf in Berlin before you are. Three weeks of Kölsch, Altbier, Christmas Altbier and Bordbistro beer, he writes, are enough for any man. Maybe, after all this, it's time for something calmer. Something warm. Something you sip slowly, from a cup that is not a glass at all. He won't say more. He's a Becher, not a blabbermouth. But he has a feeling a new colleague is on the way.",
        "And because a Spirit needs somewhere warm to wait for next year, it settles into the one thing that is always there at Christmas, every single year, without fail: the socks Nikolaus brought.",
        "It's not Christmas without socks.",
        "The Spirit has found its sole mates."
      ] },
      B: { title: "Platform 4", p: [
        "Roetgen. The big table. Four siblings, their families, two parents. And, in spirit at least, a scratched Altbier glass from Düsseldorf, who is back home on his shelf in Berlin and sends a correction via the network every time someone tells the story wrong.",
        "The Spirit is back. You can feel it. The talking until 3 a.m. The drinking. Someone brings up politics, and everyone drinks faster. By day three, everyone dreams of salad.",
        "And somewhere between the second helping and the third bottle, Tobi finally understands why Herr Klein came for this family's Spirit, of all the Spirits in the Rhineland.",
        "It was never about the food. Or the presents, or the (crooked) tree, or the decorations. Plenty of families have more of all that. It's that this family gets it. Christmas here isn't about what's on the table, it's about who's around it. Everyone together, talking too loudly and staying up too late, in the very best of spirits. That's the real thing. That's the whole point of Christmas, and this family has always known it.",
        "A Spirit like that is the rarest thing there is. And it's exactly what a small, cold, empty glass would want most, and could never have.",
        "And word comes from Cologne. At the big Anstich, everyone waited. The band played. The crowd sang. Somebody checked his watch. The barrel never came.",
        "Because the Deutsche Bahn, it turns out, never really worked for Herr Klein. It worked for whoever kept the Christmas Spirit locked up. And now nobody does: the Spirit is free, and so is the Bahn. Not good, exactly. Still late, still sorry for nothing. But back to being nobody's but its own.",
        "And somewhere in Köln Hbf, Herr Klein is still on platform 4, waiting for his connection to the Anstich. The departure board says <em>+40 min</em>. Then <em>+90</em>. Then <em>fällt aus</em>. The Deutsche Bahn regrets the inconvenience. Nobody else does.",
        "Late that night, when the table finally goes quiet, a message arrives from Herr Becher. He got off at Düsseldorf Hbf yesterday, to spend Christmas in the Altstadt with old friends. He'll be back on the shelf in Berlin before you are. Three weeks of Kölsch, Altbier, Christmas Altbier and Bordbistro beer, he writes, are enough for any man. Maybe, after all this, it's time for something calmer. Something warm. Something you sip slowly, from a cup that is not a glass at all. He won't say more. He's a Becher, not a blabbermouth. But he has a feeling a new colleague is on the way.",
        "And because a Spirit needs somewhere warm to wait for next year, it settles into the one thing that is always there at Christmas, every single year, without fail: the socks Nikolaus brought.",
        "It's not Christmas without socks.",
        "The Spirit has found its sole mates."
      ] }
    },
    end: true }
  }
};
