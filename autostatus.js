/* 
 * Разработал https://vk.com/red_catqueen
 * Приятного пользования:)
 * Git: https://github.com/Dogfree/autostatus-sovascript
 */
function setStatus(){
	var status = null;
	var likes_global = null;
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();

	//Время
	var time = time.replace(/1/gi, '1⃣');
	var time = time.replace(/2/gi, '2⃣');
	var time = time.replace(/3/gi, '3⃣');
	var time = time.replace(/4/gi, '4⃣');
	var time = time.replace(/4/gi, '4⃣');
	var time = time.replace(/5/gi, '5⃣');
	var time = time.replace(/6/gi, '6⃣');
	var time = time.replace(/7/gi, '7⃣');
	var time = time.replace(/8/gi, '8⃣');
	var time = time.replace(/9/gi, '9⃣');
	var time = time.replace(/0/gi, '0⃣');

	//Смайлы
	var smiles = ["😸", "🙀", "😿","😾", "😹", "😼", "😻", "😎","😉", "😈", "😂", "😃", "😀"];
	var smiles2 = ["🐸", "👻", "😺","😘", "😚", "😎", "😍", "😜","😃", "💍", "💎", "💌", "😙"];
	var rand_smile1 = smiles[randomInteger(0, smiles.length - 1)];
	var rand_smile2 = smiles2[randomInteger(0, smiles2.length - 1)];
	var rand_smile3 = smiles2[randomInteger(0, smiles2.length - 1)];

	//Днюха
	Vk.call('users.get', {users_ids: Vk.myId(), fields: 'bdate'}, function (r) {
		likes_global = r.body[0].bdate;
		status = '|&#8987;|' + time + '(' + rand_smile1 + ') Дата моего дня рождения:' + likes_global + '(' + rand_smile2 + ')';
		Vk.call("status.set", {text: status}, function(response){});
	});

	
}

function randomInteger(min, max) {
	var rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

onStart = function(a) {
	alert('Автор скрипта: https://vk.com/red_catqueen\nПриятного пользования :)\n автоапдейт статуса, каждые 10 секунд :D');
    repeat(function(){
    	setStatus();
    }, 10000, 10000);
};
