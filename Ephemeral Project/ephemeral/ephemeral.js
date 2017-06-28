// TRIAL VARIABLES
var TOTAL_TRIALS = 8;
var TASK_BLOCK_SIZE = 50;
var CURRENT_TRIAL = 1;
var IS_EPHEMERAL = true;
var TASK_BLOCK = 1;
var MASTER_LISTS = [['Kayak', 'Gondola', 'Canoe', 'Sailboat'], ['Painting', 'Sculpture', 'Portrait', 'Photograph'], ['Soccer', 'Basketball', 'Baseball', 'Football'], ['Airplane', 'Helicopter', 'Blimp', 'Balloon'], ['Carrot', 'Potato', 'Onion', 'Eggplant'], ['Pearl', 'Topaz', 'Emerald', 'Sapphire'], ['Mountain', 'Knoll', 'Highland', 'Foothill'], ['Hockey', 'Skiing', 'Curling', 'Skating'], ['Horror', 'Comedy', 'Drama', 'Foreign'], ['Geothermal', 'Solar', 'Hydro', 'Biomass'], ['Roman', 'Byzantine', 'Egyptian', 'Ottoman'], ['Paperback', 'Magazine', 'Newspaper', 'Journal'], ['Parrot', 'Bluebird', 'Robin', 'Budgie'], ['Tiger', 'Leopard', 'Cheetah', 'Cougar'], ['Squirrel', 'Mouse', 'Hamster', 'Gerbil'], ['House', 'Apartment', 'Cabin', 'Cottage'], ['Pencil', 'Ballpoint', 'Marker', 'Crayon'], ['Shirt', 'Jacket', 'Sweater', 'Overcoat'], ['Movie', 'Theatre', 'Musical', 'Opera'], ['Lasagna', 'Spaghetti', 'Linguine', 'Penne'], ['Spoon', 'Knife', 'Spatula', 'Ladle'], ['Poplar', 'Birch', 'Alder', 'Willow'], ['Tornado', 'Cyclone', 'Hurricane', 'Storm'], ['Reebok', 'Asics', 'Adidas', 'Converse'], ['Chardonnay', 'Merlot', 'Shiraz', 'Cabernet'], ['Virgo', 'Taurus', 'Aquarius', 'Gemini'], ['Herbal', 'Rooibos', 'Jasmine', 'Peppermint'], ['Lipstick', 'Nailpolish', 'Shadow', 'Blush'], ['Japan', 'China', 'Korea', 'Singapore'], ['Bahamas', 'Barbados', 'Jamaica', 'Bermuda'], ['London', 'Paris', 'Madrid', 'Berlin'], ['Coupe', 'Minivan', 'Sedan', 'Hatchback'], ['Termite', 'Katydid', 'Spider', 'Ladybug'], ['Toyota', 'Mazda', 'Mercedes', 'Honda'], ['Sneaker', 'Sandal', 'Moccasin', 'Loafer'], ['Saturn', 'Jupiter', 'Venus', 'Mercury'], ['Hydrogen', 'Helium', 'Oxygen', 'Nitrogen'], ['Stroll', 'Saunter', 'Prance', 'Swagger'], ['Terrier', 'Bulldog', 'Dalmatian', 'Poodle'], ['Purse', 'Backpack', 'Schoolbag', 'Duffle'], ['Penny', 'Nickel', 'Quarter', 'Dollar'], ['Rhine', 'Amazon', 'Danube', 'Yangtze'], ['Violin', 'Flute', 'Piano', 'Percussion'], ['Beethoven', 'Brahms', 'Chopin', 'Handel'], ['Ballroom', 'Ballet', 'Swing', 'Hiphop'], ['Molson', 'Kokanee', 'Labatt', 'Coors'], ['Cheddar', 'Camembert', 'Gouda', 'Parmesan'], ['Almond', 'Pecan', 'Pistachio', 'Walnut'], ['Scrabble', 'Checkers', 'Chess', 'Backgammon'], ['Flannel', 'Linen', 'Cotton', 'Spandex'], ['Bigfoot', 'Sasquatch', 'Minotaur', 'Ogopogo'], ['Sardine', 'Trout', 'Salmon', 'Whitefish'], ['Embroidery', 'Crochet', 'Knitting', 'Sewing'], ['Gucci', 'Armani', 'Versace', 'Vuitton'], ['France', 'Germany', 'Spain', 'England'], ['Tahiti', 'Samoa', 'Tonga', 'Tuvalu'], ['Hershey', 'Caramilk', 'Smarties', 'Eatmore'], ['Samsung', 'Sanyo', 'Panasonic', 'Pioneer'], ['Basil', 'Oregano', 'Thyme', 'Parsley'], ['Canucks', 'Flames', 'Oilers', 'Senators'], ['Clock', 'Timepiece', 'Sundial', 'Watch'], ['Hearts', 'Spades', 'Diamonds', 'Clubs'], ['Arctic', 'Atlantic', 'Pacific', 'Indian'], ['Winter', 'Summer', 'Spring', 'Autumn'], ['Happy', 'Scared', 'Mellow', 'Angry'], ['Hemlock', 'Spruce', 'Cedar', 'Juniper'], ['Carpet', 'Vinyl', 'Laminate', 'Hardwood'], ['Doctor', 'Physician', 'Surgeon', 'Nurse'], ['Fridge', 'Stove', 'Microwave', 'Dishwasher'], ['Blender', 'Mixer', 'Juicer', 'Chopper'], ['Ceramic', 'Granite', 'Porcelain', 'Marble'], ['Michigan', 'Ohio', 'Illinois', 'Indiana']];
var TASK_LISTS;
var TASK_LIST1;
var TASK_LIST2;
var MENUS;
var menu1tasks;
var menu2tasks;
var menu3tasks;
var log = [];
var startTime = null;
var endTime = null;

// TASK VARIABLES
var current_menu;
var name_current_menu ;
var name_current_item;
var number_current_item;

////////////////////////////////////////////////////////
//// TRIAL FUNCTIONS
////////////////////////////////////////////////////////

function onLoad() {
	randomTasks();
	// console.log(TASK_LISTS[0][0]);
	if (CURRENT_TRIAL == 1) {
		current_menu = TASK_LISTS[0][0];
		number_current_item = TASK_LISTS[0][1];

	}
	populateMenus();
	$('#current_trial').text(CURRENT_TRIAL);
	$('#total_trials').text(TOTAL_TRIALS);
	// console.log(current_menu);
	$('#current_menu').text(current_menu);
	// number_current_item = TASK_LISTS[CURRENT_TRIAL-1];
	$('#name_current_item').text(name_current_item);
	// console.log("In onLoad");
	$(".no-fade").fadeTo(0,1);
	// randomLists();
}

function update() {
	if (startTime != null && endTime != null) {
		if (TOTAL_TRIALS == TASK_BLOCK_SIZE) {
			var time = endTime - startTime;
			log.push([CURRENT_TRIAL, time]);
		}
	}
	CURRENT_TRIAL += 1;
	if (CURRENT_TRIAL > TOTAL_TRIALS) {
		if (TOTAL_TRIALS == 8) {
			CURRENT_TRIAL = 1;
			TOTAL_TRIALS = TASK_BLOCK_SIZE;
			onLoad();
			alert("You have completed the practice set. Now, you will have a set of " + TASK_BLOCK_SIZE + " tasks to complete. Please select each item as quickly as possible.");
			
		} else if (TOTAL_TRIALS == TASK_BLOCK_SIZE && IS_EPHEMERAL) {
			CURRENT_TRIAL = 1;
			TOTAL_TRIALS = TASK_BLOCK_SIZE;
			onLoad();
			if (TASK_BLOCK == 1) {
				TASK_BLOCK = 2;
				alert("You have completed the first block of tasks. Please take a short break before continuing. The next block will be with the same conditions.");
			} else {
				saveData();
				window.location.replace("./eq.html");
			}
	}
	} else {
		$('#current_trial').text(CURRENT_TRIAL);
		$('#total_trials').text(TOTAL_TRIALS);

		$('#current_menu').text(TASK_LISTS[CURRENT_TRIAL-1][0]);
		current_menu = TASK_LISTS[CURRENT_TRIAL-1][0];
		number_current_item = TASK_LISTS[CURRENT_TRIAL-1][1];
		populateItems("menu1", menu1tasks);
		populateItems("menu2", menu2tasks);
		populateItems("menu3", menu3tasks);
		$('#name_current_item').text(name_current_item);

	}
}

function randomList(x,n) {
	var random_lists = [];
	for (i=0; i<x; i++) {
		var num = Math.floor(Math.random()*n);
		while ($.inArray(num, random_lists) != -1) {
			num = Math.floor(Math.random()*n);
		}
		random_lists.push(num);
	}
	return random_lists;
}

function randomTasks() {
	var taskNumbers1 = randomList(8,16);
	var taskNumbers2 = randomList(8,16);
	var taskNumbers3 = randomList(8,16);

	var tasks1 = multiplyTasks(taskNumbers1, 1);
	// console.log(tasks1.length);
	var tasks2 = multiplyTasks(taskNumbers2, 2);
	var tasks3 = multiplyTasks(taskNumbers3, 3);

	var orderedTasks = tasks1.concat(tasks2, tasks3);
	TASK_LISTS = shuffleArray(orderedTasks);
	// console.log("TASK_LISTS   ", TASK_LISTS);
}

function multiplyTasks(tasks, num) {
	var result = [];
	var multiply = [15, 8, 5, 4, 3, 3, 2, 2];
	for (i=0; i < tasks.length; i++) {
		for (j=0; j < multiply[i]; j++) {
			result.push([num, tasks[i]]);
		}
	}
	return shuffleArray(result);
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

// TODO: fix name_current_item to actually be random
function populateMenus() {
	MENUS = randomList(24, 72);
	// console.log("TASK_LIST2 ----- ", TASK_LISTS);
	// randomTasks();
	// MENUS1 = TASK_LISTS.slice(0,12);
	// MENUS2 = TASK_LISTS.slice(12,25);
	// console.log(TASK_LISTS, TASK_LIST1, TASK_LIST2)

	// console.log(MASTER_LISTS[TASK_LISTS[0]][0]);
	// name_current_item = MASTER_LISTS[TASK_LISTS[0]][0];
	// console.log(TASK_LISTS);
	// console.log(MASTER_LISTS[TASK_LISTS[0][0]]);
	if (IS_EPHEMERAL) {
		menu1tasks = MASTER_LISTS[MENUS[0]].concat(MASTER_LISTS[MENUS[1]],MASTER_LISTS[MENUS[2]],MASTER_LISTS[MENUS[3]]);
		populateItems("menu1", menu1tasks);
		menu2tasks = MASTER_LISTS[MENUS[4]].concat(MASTER_LISTS[MENUS[5]],MASTER_LISTS[MENUS[6]],MASTER_LISTS[MENUS[7]]);
		populateItems("menu2", menu2tasks);
		menu3tasks = MASTER_LISTS[MENUS[8]].concat(MASTER_LISTS[MENUS[9]],MASTER_LISTS[MENUS[10]],MASTER_LISTS[MENUS[11]]);
		populateItems("menu3", menu3tasks);
	} else {
		menu1tasks = MASTER_LISTS[MENUS[12]].concat(MASTER_LISTS[MENUS[13]],MASTER_LISTS[MENUS[14]],MASTER_LISTS[MENUS[15]]);
		populateItems("menu1", menu1tasks);
		menu2tasks = MASTER_LISTS[MENUS[16]].concat(MASTER_LISTS[MENUS[17]],MASTER_LISTS[MENUS[18]],MASTER_LISTS[MENUS[19]]);
		populateItems("menu2", menu2tasks);
		menu3tasks = MASTER_LISTS[MENUS[20]].concat(MASTER_LISTS[MENUS[21]],MASTER_LISTS[MENUS[22]],MASTER_LISTS[MENUS[23]]);
		populateItems("menu3", menu3tasks);
	}
}

function populateItems(id, list) {
	var fadedThings = toFade();
	var menu = document.getElementById(id);
	while (menu.firstChild) {
		menu.removeChild((menu.firstChild));
	}
	for (i=0; i < list.length; i++) {
	    var item = document.createElement('a');
	    item.innerHTML = list[i];
	    if (i == number_current_item && id[4] == current_menu) {
	    	name_current_item = list[i];
	    }
	    if (id[4] == current_menu) {
	    	if (i == number_current_item && $.inArray(i, fadedThings) != -1) {
	    	// console.log("in loop");
	    	item.className = "no-fade item";
	    	item.onclick = function(e) {
	    		endTime = $.now();
	    		update();
	    	}
		    } else if(i == number_current_item && $.inArray(i, fadedThings) == -1) {
		    	item.className = "faded item";
		    	item.onclick = function(e) {
		    		endTime = $.now();
		    		update();
		    	}
		    } else if ($.inArray(i, fadedThings) != -1) {
		    	item.className = "no-fade";
		    } else if (IS_EPHEMERAL == true) {
		    	item.className = "faded";
		    }
	    }
	    menu.appendChild(item);
	    if (i == 3 || i == 7 || i == 11) {
    		var line = document.createElement('hr');
    		menu.appendChild(line);
	    }
    }
}

function toFade() {
	var items = randomList(3, 16);
	var num = Math.random();
	if (num < .8 && $.inArray(number_current_item, items) == -1) {
		items[0] = number_current_item;
	}
	return items;
}

// http://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
function saveData() {
  var csv = "Ephemeral"+ "\n";
  for(var i = 0; i < log.length; i++){
    csv = csv + log[i] + "," + "\n";
  }
  window.open('data:text/csv;charset=utf-8,' + escape(csv));
}
