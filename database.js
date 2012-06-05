
var db;


function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
	//inicializeLanguage("pt");
}



function onDeviceReady() {
	db = window.openDatabase("personality", "1.0", "Personality DB", 1000000);
    db.transaction(populateDB, transaction_error, populateDB_success);
}

// alert dialog dismissed
function alertDismissed() {
	// do something
}

function transaction_error(tx, error) {
	navigator.notification.alert(
            "Database Error: " + error,  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
	);
}

function populateDB_success() {
	//$('#resp').append('Criou');
}

function populateDB(tx) {
	var table_user = 
		"CREATE TABLE IF NOT EXISTS user ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"name VARCHAR(50), " +
		"email VARCHAR(50), " +
		"password VARCHAR(20), " +
		"gender VARCHAR(10), " + 
		"age INTEGER, " +
		"language VARCHAR(10))";
    tx.executeSql(table_user);
    var table_tipi = 
		"CREATE TABLE IF NOT EXISTS tipi ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"user_id VARCHAR(50), " +
		"numOfQuestion INTEGER, " +
		"q1 INTEGER, " +
		"q2 INTEGER, " + 
		"q3 INTEGER, " +
		"q4 INTEGER, " +
		"q5 INTEGER, " +
		"q6 INTEGER, " +
		"q7 INTEGER, " +
		"q8 INTEGER, " +
		"q9 INTEGER, " +
		"q10 INTEGER)";
    tx.executeSql(table_tipi);
    var table_neo_ipip = 
		"CREATE TABLE IF NOT EXISTS neo_ipip ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"user_id VARCHAR(50), " +
		"numOfQuestion INTEGER, " +
		"q1 INTEGER, " +
		"q2 INTEGER, " + 
		"q3 INTEGER, " +
		"q4 INTEGER, " +
		"q5 INTEGER, " + 
		"q6 INTEGER, " +
		"q7 INTEGER, " +
		"q8 INTEGER, " + 
		"q9 INTEGER, " +
		"q10 INTEGER, " +
		"q11 INTEGER, " + 
		"q12 INTEGER, " +
		"q13 INTEGER, " +
		"q14 INTEGER, " + 
		"q15 INTEGER, " +
		"q16 INTEGER, " +
		"q17 INTEGER, " + 
		"q18 INTEGER, " +
		"q19 INTEGER, " +
		"q20 INTEGER, " + 
		"q21 INTEGER, " + 
		"q22 INTEGER, " +
		"q23 INTEGER, " +
		"q24 INTEGER, " + 
		"q25 INTEGER, " +
		"q26 INTEGER, " +
		"q27 INTEGER, " + 
		"q28 INTEGER, " +
		"q29 INTEGER, " +
		"q30 INTEGER, " + 
		"q31 INTEGER, " + 
		"q32 INTEGER, " +
		"q33 INTEGER, " +
		"q34 INTEGER, " + 
		"q35 INTEGER, " +
		"q36 INTEGER, " +
		"q37 INTEGER, " + 
		"q38 INTEGER, " +
		"q39 INTEGER, " +
		"q40 INTEGER, " + 
		"q41 INTEGER, " + 
		"q42 INTEGER, " +
		"q43 INTEGER, " +
		"q44 INTEGER, " + 
		"q45 INTEGER, " +
		"q46 INTEGER, " +
		"q47 INTEGER, " + 
		"q48 INTEGER, " +
		"q49 INTEGER, " +
		"q50 INTEGER, " + 
		"q51 INTEGER, " + 
		"q52 INTEGER, " +
		"q53 INTEGER, " +
		"q54 INTEGER, " + 
		"q55 INTEGER, " +
		"q56 INTEGER, " +
		"q57 INTEGER, " + 
		"q58 INTEGER, " +
		"q59 INTEGER, " +
		"q60 INTEGER, " + 
		"q61 INTEGER, " + 
		"q62 INTEGER, " +
		"q63 INTEGER, " +
		"q64 INTEGER, " + 
		"q65 INTEGER, " +
		"q66 INTEGER, " +
		"q67 INTEGER, " + 
		"q68 INTEGER, " +
		"q69 INTEGER, " +
		"q70 INTEGER, " + 
		"q71 INTEGER, " + 
		"q72 INTEGER, " +
		"q73 INTEGER, " +
		"q74 INTEGER, " + 
		"q75 INTEGER, " +
		"q76 INTEGER, " +
		"q77 INTEGER, " + 
		"q78 INTEGER, " +
		"q79 INTEGER, " +
		"q80 INTEGER, " + 
		"q81 INTEGER, " + 
		"q82 INTEGER, " +
		"q83 INTEGER, " +
		"q84 INTEGER, " + 
		"q85 INTEGER, " +
		"q86 INTEGER, " +
		"q87 INTEGER, " + 
		"q88 INTEGER, " +
		"q89 INTEGER, " +
		"q90 INTEGER, " + 
		"q91 INTEGER, " + 
		"q92 INTEGER, " +
		"q93 INTEGER, " +
		"q94 INTEGER, " + 
		"q95 INTEGER, " +
		"q96 INTEGER, " +
		"q97 INTEGER, " + 
		"q98 INTEGER, " +
		"q99 INTEGER, " +
		"q100 INTEGER, " +
		"q101 INTEGER, " + 
		"q102 INTEGER, " + 
		"q103 INTEGER, " +
		"q104 INTEGER, " +
		"q105 INTEGER, " + 
		"q106 INTEGER, " +
		"q107 INTEGER, " +
		"q108 INTEGER, " + 
		"q109 INTEGER, " +
		"q110 INTEGER, " +
		"q111 INTEGER, " + 
		"q112 INTEGER, " + 
		"q113 INTEGER, " +
		"q114 INTEGER, " +
		"q115 INTEGER, " + 
		"q116 INTEGER, " +
		"q117 INTEGER, " +
		"q118 INTEGER, " + 
		"q119 INTEGER, " +
		"q120 INTEGER, " +
		"q121 INTEGER, " + 
		"q122 INTEGER, " + 
		"q123 INTEGER, " +
		"q124 INTEGER, " +
		"q125 INTEGER, " + 
		"q126 INTEGER, " +
		"q127 INTEGER, " +
		"q128 INTEGER, " + 
		"q129 INTEGER, " +
		"q130 INTEGER, " +
		"q131 INTEGER, " + 
		"q132 INTEGER, " + 
		"q133 INTEGER, " +
		"q134 INTEGER, " +
		"q135 INTEGER, " + 
		"q136 INTEGER, " +
		"q137 INTEGER, " +
		"q138 INTEGER, " + 
		"q139 INTEGER, " +
		"q140 INTEGER, " +
		"q141 INTEGER, " + 
		"q142 INTEGER, " + 
		"q143 INTEGER, " +
		"q144 INTEGER, " +
		"q145 INTEGER, " + 
		"q146 INTEGER, " +
		"q147 INTEGER, " +
		"q148 INTEGER, " + 
		"q149 INTEGER, " +
		"q150 INTEGER, " +
		"q151 INTEGER, " + 
		"q152 INTEGER, " + 
		"q153 INTEGER, " +
		"q154 INTEGER, " +
		"q155 INTEGER, " + 
		"q156 INTEGER, " +
		"q157 INTEGER, " +
		"q158 INTEGER, " + 
		"q159 INTEGER, " +
		"q160 INTEGER, " +
		"q161 INTEGER, " + 
		"q162 INTEGER, " + 
		"q163 INTEGER, " +
		"q164 INTEGER, " +
		"q165 INTEGER, " + 
		"q166 INTEGER, " +
		"q167 INTEGER, " +
		"q168 INTEGER, " + 
		"q169 INTEGER, " +
		"q170 INTEGER, " +
		"q171 INTEGER, " + 
		"q172 INTEGER, " + 
		"q173 INTEGER, " +
		"q174 INTEGER, " +
		"q175 INTEGER, " + 
		"q176 INTEGER, " +
		"q177 INTEGER, " +
		"q178 INTEGER, " + 
		"q179 INTEGER, " +
		"q180 INTEGER, " +
		"q181 INTEGER, " + 
		"q182 INTEGER, " + 
		"q183 INTEGER, " +
		"q184 INTEGER, " +
		"q185 INTEGER, " + 
		"q186 INTEGER, " +
		"q187 INTEGER, " +
		"q188 INTEGER, " + 
		"q189 INTEGER, " +
		"q190 INTEGER, " +
		"q191 INTEGER, " + 
		"q192 INTEGER, " + 
		"q193 INTEGER, " +
		"q194 INTEGER, " +
		"q195 INTEGER, " + 
		"q196 INTEGER, " +
		"q197 INTEGER, " +
		"q198 INTEGER, " + 
		"q199 INTEGER, " +
		"q200 INTEGER, " +
		"q201 INTEGER, " + 
		"q202 INTEGER, " + 
		"q203 INTEGER, " +
		"q204 INTEGER, " +
		"q205 INTEGER, " + 
		"q206 INTEGER, " +
		"q207 INTEGER, " +
		"q208 INTEGER, " + 
		"q209 INTEGER, " +
		"q210 INTEGER, " +
		"q211 INTEGER, " + 
		"q212 INTEGER, " + 
		"q213 INTEGER, " +
		"q214 INTEGER, " +
		"q215 INTEGER, " + 
		"q216 INTEGER, " +
		"q217 INTEGER, " +
		"q218 INTEGER, " + 
		"q219 INTEGER, " +
		"q220 INTEGER, " +
		"q221 INTEGER, " + 
		"q222 INTEGER, " + 
		"q223 INTEGER, " +
		"q224 INTEGER, " +
		"q225 INTEGER, " + 
		"q226 INTEGER, " +
		"q227 INTEGER, " +
		"q228 INTEGER, " + 
		"q229 INTEGER, " +
		"q230 INTEGER, " +
		"q231 INTEGER, " + 
		"q232 INTEGER, " + 
		"q233 INTEGER, " +
		"q234 INTEGER, " +
		"q235 INTEGER, " + 
		"q236 INTEGER, " +
		"q237 INTEGER, " +
		"q238 INTEGER, " + 
		"q239 INTEGER, " +
		"q240 INTEGER, " +
		"q241 INTEGER, " + 
		"q242 INTEGER, " + 
		"q243 INTEGER, " +
		"q244 INTEGER, " +
		"q245 INTEGER, " + 
		"q246 INTEGER, " +
		"q247 INTEGER, " +
		"q248 INTEGER, " + 
		"q249 INTEGER, " +
		"q250 INTEGER, " +
		"q251 INTEGER, " + 
		"q252 INTEGER, " + 
		"q253 INTEGER, " +
		"q254 INTEGER, " +
		"q255 INTEGER, " + 
		"q256 INTEGER, " +
		"q257 INTEGER, " +
		"q258 INTEGER, " + 
		"q259 INTEGER, " +
		"q260 INTEGER, " +
		"q261 INTEGER, " + 
		"q262 INTEGER, " + 
		"q263 INTEGER, " +
		"q264 INTEGER, " +
		"q265 INTEGER, " + 
		"q266 INTEGER, " +
		"q267 INTEGER, " +
		"q268 INTEGER, " + 
		"q269 INTEGER, " +
		"q270 INTEGER, " +
		"q271 INTEGER, " + 
		"q272 INTEGER, " + 
		"q273 INTEGER, " +
		"q274 INTEGER, " +
		"q275 INTEGER, " + 
		"q276 INTEGER, " +
		"q277 INTEGER, " +
		"q278 INTEGER, " + 
		"q279 INTEGER, " +
		"q280 INTEGER, " +
		"q281 INTEGER, " + 
		"q282 INTEGER, " + 
		"q283 INTEGER, " +
		"q284 INTEGER, " +
		"q285 INTEGER, " + 
		"q286 INTEGER, " +
		"q287 INTEGER, " +
		"q288 INTEGER, " + 
		"q289 INTEGER, " +
		"q290 INTEGER, " +
		"q291 INTEGER, " + 
		"q292 INTEGER, " + 
		"q293 INTEGER, " +
		"q294 INTEGER, " +
		"q295 INTEGER, " + 
		"q296 INTEGER, " +
		"q297 INTEGER, " +
		"q298 INTEGER, " + 
		"q299 INTEGER, " +
		"q300 INTEGER )";

    tx.executeSql(table_neo_ipip);
}

function errorDB(tx, error) {
	navigator.notification.alert(
            "Error: " + this.email,  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
	);
}
function authorize(){
    db = window.openDatabase("personality", "1.0", "Personality DB", 1000000);
    db.transaction(getAuthorization, auth_error, getAuthorizationSucess);
}
function auth_error(tx, error) {
	navigator.notification.alert(
            "Authorization Error: " + error.code,  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
	);
}
function getAuthorization(tx) {
	var email = document.getElementById('text_email-inicio').value;
	var pass = document.getElementById('text_senha-inicio').value;
	if (trim(email) == '' || trim(pass) == '')
	{
		navigator.notification.alert(
            "Preencha todos os campos!",  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
		);
	}else{
		var sql = "select id, name, email " + 
				"from user where email='"+email+"' and password='"+pass+"'";
		
		tx.executeSql(sql, [], getAuthorizationSucess, errorDB);
	}
	
		
}

var user_id = "";
function getUserID(){
	return this.user_id;	
}

function setUserID(id){
	this.user_id = id;	
}

function getAuthorizationSucess(tx, results) {
	var len = results.rows.length;
	
	
	if(len >= 1){
		var row = results.rows.item(0);
		//this.user_id   = row['id'];
		setUserID(row['id']);
		//alert("user "+getUserID());
		$.mobile.changePage($('#escolha-de-inventario'));
	}else{
		navigator.notification.alert(
            "Usuário ou senha não aceita",  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
		);
	}
	/*
	tx.executeSql("INSERT INTO user (name, email, password, gender, age, language) VALUES ('Igor','igor@oi.com','123','M',25,'English')");
	*/
}


function atualizarQuestao(teste, pergunta, resposta){
	var atualizar = "UPDATE "+teste+" set q" + pergunta + " = " + resposta + ",numOfQuestion = "+pergunta+" where user_id = "+this.user_id;
	return atualizar;		
}

function inserirQuestao(teste, pergunta, resposta){
	var cadastrar = "insert into "+teste+" (user_id, numOfQuestion, q1) values ("+this.user_id+","+pergunta+", "+resposta+")";
	return cadastrar;		
}

function subscribe(){
    db = window.openDatabase("personality", "1.0", "Personality DB", 1000000);
    db.transaction(getSubscribe, subscribe_error, getSubscribeSucess);
}
function subscribe_error(tx, error) {
	navigator.notification.alert(
            "Subscribe Error: " + error.code,  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
	);
}



function getSubscribe(tx) {
	var name = document.getElementById('text-nome-cadastro').value;
	var email = document.getElementById('text-email-cadastro').value;
	var password = document.getElementById('text-senha-cadastro').value;
	var repassword = document.getElementById('text-re_senha-cadastro').value;
	var gender = document.getElementById('escolha-sexo');
	var age = document.getElementById('text-idade').value;
	var language = document.getElementById('select_idioma');
	var accept = document.getElementById('select_aceita');
	
		
	
	var index_gender = gender.selectedIndex;
	var index_lang = language.selectedIndex;
	var index_accept = accept.selectedIndex;
	
    gender = gender.options[index_gender].text;
	language = language.options[index_lang].text;
	accept = accept.options[index_accept].text;
	
	


	if (password != repassword)
	{
		navigator.notification.alert(
            'Confirmação diferente da senha!',  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
		);
	}else if(accept != "Sim"){
		navigator.notification.alert(
            'Para se cadastrar você tem que aceitar os termos.',  // message
            alertDismissed,         // callback
            'Error',            // title
            'OK'                  // buttonName
		);
	}else{
		var cadastrar = "INSERT INTO user (name, email, password, gender, age, language) VALUES ('"
		+ name
		+ "','"
		+ email
		+ "','"
		+ password
		+ "','"
		+ gender
		+ "',"
		+ age
		+ ",'"
		+ language
		+ "')";
		tx.executeSql(cadastrar);
	}
	
		
}


function getSubscribeSucess() {
	alert("Usuário cadastrado com sucesso!");
	$.mobile.changePage($('#inicio'));
}



/**
========= FUNCOES EXTRAS ============
*/

function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}




