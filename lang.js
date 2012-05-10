var lang;


function setLanguage(x) {
	this.lang = x;
}
function getLanguage(){
	return this.lang;
}

var en_dict = {
	// Muito usado
	'OK': 'OK',
    'Yes':  'Yes',
    'No':   'No',
	'Cancel': 'Cancel',
	'Voltar': 'Back',
	
	// Tela Login
	'Login': '<b>Login</b>',
	'Email': '<b> E-mail: </b>',
	'Password': '<b> Password: </b>',
	'ForgotPass': '<b>Forgot your password?</b>',
	// Tela Recuperar Senha
	'TitlePassRecovery': '<b>Recover Password</b>',
	'Recovery': '<b>Recovery</b>',
	// Tela Instrucoes NEO IPIP
	'TitleNEOIPIP_instructions': 'NEO-IPIP Instructions',
	'conteudo-instrucao-NEO':'Research using the Personality Inventory is linked to several research projects under development in the <a href="http://www.decomp.ufs.br" target="_blank" rel="external">Department of Computing</a> of <a href="http://www.ufs.br" target="_blank" rel="external">UFS</a> under coordination of <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Teacher Dra. Maria Augusta Silveira Netto Nunes</a> and under protection of creators of the tests, <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> and <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling.</a> These are personality inventories, which work as follows: When starting the test, you will be presented with several sentences. Read each sentence carefully and then click the button that best indicates your agreement to how the sentence describes you, following a scale ranging from "strongly disagree" to "strongly agree" to the NEO-IPIP and the TIPI. At the end of the questionnaire will generate a report with the descriptive results of his personality.',

	// Tela Instrucoes TIPI
	'titulo-instrucao-TIPI' : 'TIPI Instructions',
	'conteudo-instrucao-TIPI':'Research using the Personality Inventory is linked to several research projects under development in the <a href="http://www.decomp.ufs.br" target="_blank" rel="external">Department of Computing</a> of <a href="http://www.ufs.br" target="_blank" rel="external">UFS</a> under coordination of <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Teacher Dra. Maria Augusta Silveira Netto Nunes</a> and under protection of creators of the tests, <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> and <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling.</a> These are personality inventories, which work as follows: When starting the test, you will be presented with several sentences. Read each sentence carefully and then click the button that best indicates your agreement to how the sentence describes you, following a scale ranging from "strongly disagree" to "strongly agree" to the NEO-IPIP and the TIPI. At the end of the questionnaire will generate a report with the descriptive results of his personality.',

	// Tela Cadastro Usuario
	'titulo-instrucao-cadastro': '<b>New User</b>',
	'nome-cadastro': '<b> Name:</b>',
	're_senha-cadastro' : '<b> Retype password:</b>',
	'sexo-cadastro':'<b> Sex:</b>',
	'idade-cadastro': '<b> Age:</b>',
	'idioma-cadastro':'<b> Language:</b>',
	'politica':'<b> Policy:</b>',
	'texto-politica':'All responses to this questionnaire are completely confidential and will not be associated you as an individual.',
	'aceita-cadastro':'<b> Do you agree?</b>',
	'label-button-cadastrar':'<b>Register</b>',
	// Tela Contato
	'titulo-contato':'<b>Contact</b>',
	'titulo-conteudo-contato':'<b>Contact us:</b>',
	'orientadora':'PhD Maria Augusta Silveira Neto Nunes&nbsp; (Leader):',
	'christiano':'Christiano Santana (Graduating in Information Systems):',
	'igor':'Igor Pontes (Graduating in Computer Science):',
	
	'railan':'Railan Xisto (Graduating in Computer Science):',
	// ver como organizar o resto da tela de contato que estao sem IDs
	// Tela Sobre
	'titulo-sobre':'<b>About</b>',
	'texto-conteudo-sobre':'This project was developed by the undergraduation students Christiano Santana, Igor Pontes, Jonas Bezerra and Railan Xisto under orientation of professor <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">PhD. Maria Augusta Silveira Netto Nunes</a> of the <a href="http://www.decomp.ufs.br" target="_blank" rel="external">Computation Department</a> of <a href="http://www.ufs.br" target="_blank" rel="external">Federal University of Sergipe</a>.<br><br>The researches that use the Personality inventories mentioned below are entailed the several research projects in development in the Computation Department of the Federal University of Sergipe under professor coordination <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">PhD. Maria Augusta Silveira Netto Nunes</a>  and under tests creators guardianship,  <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> e <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling</a>. ',
	'sobre-inventario':'<b>About inventories:</b>',
	'ipip':'<b>Inventory IPIP</b><br>(International Personality Item Pool)',
	'tipi':'<b>Inventory of TIPI</b><br>(Ten Item Personality Inventory)',
	// Tela IPIP
	'titulo-ipip':'<b>Inventory IPIP</b>',
	'texto-conteudo-ipip':'According to Dr. Lewis R. Goldberg and the Dr. Gerard Saucier (Investigator Main and Co-investigator, respectively), the <a href="http://ipip.ori.org/ipip/">consortium IPIP</a> It is a scientific work in set for the development of advanced measures of personality and another Individual differences.<br><br>IPIP it destines to supply fast access to the differences measures individual, everything in the public domain, to are developed jointly among scientists of the whole world. Later, the site will be able to include data available unrefineds to laughs-analysis and, moreover, Should serve as a forum for the researches psychometric ideas and results sowing.',
	// Tela TIPI
	'titulo-tipi':'<b>Inventory TIPI</b>',
	'texto-conteudo-tipi':'Gosling said, "When time is limited, researchers may be faced with the choice between using an extremely short of Big Five personality dimensions or not to use any measure. to meet the need for a very short extent, inventory items 5-10 were developed and evaluated. Although somewhat lower than those instruments multi-standard items, instruments reached adequate levels in terms of (a) convergence with widely used measures of the Five Major factors in their own reports, observers and peers, (b) Test - retest reliability, (c) patterns of external correlations provided and (d) convergence between themselves and the evaluations of observers."',
	// Tela Personality Inventory
	'texto-conteudo-escolha':'Hello. Select an option below to continue the inventory:',
	// Tela Alterar Senha
	'titulo-opcoes':'<b>Change password</b>',
	'label-senha-opcoes':'<b>Current password:</b>',
	'label-novasenha-opcoes':'<b>New password:</b>',
	'label-button-alterar':'<b>Change</b>',
	// Telas perguntas dos inventarios

	// Telas de Conclusao
	'titulo-saudacao-neo':'Conclusion of Inventory',
	'texto-conteudo-saudacao-neo':"<br><center>CONGRATULATIONS!</center><br>  Your questionnaire NEO-IPIP realized and was performed with Success.<br> <br> Click the button below to see the chart referring to your personality with details corespondente inventory.",
	'label-button-saudacao-neo':"<b>NEO's Graph</b>",
	'titulo-saudacao-tipi':'Conclusion of Inventory',
	'texto-conteudo-saudacao-tipi':"<br><center>CONGRATULATIONS!</center><br> Your questionnaire TIPI realized and was performed with Success.<br> <br> Click the button below to see the chart referring to your personality with details corespondente inventory.",
	'label-button-saudacao-tipi':"<b>TIPI's Graph</b>",
	'label-conteudo-extroversão':'<b>Extraversion</b> - The Extraversion is marked by a strong engagement with the outside world. Extroverts enjoy being with people, are full of energy and often experience positive emotions. They tend to be enthusiastic, action-oriented, individuals who are prone to say "Yes!" or "Come on!" opportunities for excitement. In groups, they like to talk, assert themselves and draw attention to themselves. The introverted, lack the exuberance, energy and activity levels of extroverts. Introverts tend to be quiet, discreet, thoughtful and disengaged from the social world. Their lack of social involvement should not be interpreted as shyness or depression; the introvert simply needs less stimulation than an extravert and prefers to be alone. The independence and reserve of the introvert is sometimes mistaken for hostility or arrogance. In fact, an introvert who scores high on Agreeableness dimension will not seek other people, but quite pleasant when approached.<br><b>Facets of Extraversion:</b><br><b>Friendliness</b> - Friendly people genuinely like other people and openly demonstrate positive feelings toward others.<br><b>Gregariousness</b> - People gregarious see the company of others pleasantly stimulating and rewarding as. They like the excitement of crowds.<br><b>Assertiveness</b> - People with high scores on assertiveness like to talk, take charge and direct the activities of others. They tend to be leaders in groups.<br><b>Activity level</b> - active individuals lead busy lives and accelerated. They move quickly, forcefully and vigorously and are involved in many activities.<br><b>Looking for excitement</b> - People with high scores on this scale are easily bored if they have high levels of stimulation. They love lights, movement and excitement.<br><b>Good mood</b> - This scale measures positive mood and feelings, not negative emotions (which are a part of the domain of Neuroticism).',
	'label-conteudo-socializacao':'<b>Socialization</b> - The Socialization reflects individual differences in concern with cooperation and social harmony. Value sociable individuals living with others. They are therefore considerate, friendly, generous, helpful and willing to compromise their interests with those of others. Sociable people also have an optimistic view of human nature. They believe people are basically honest, decent and trustworthy. Non-sociable individuals place self-interest above the coexistence with others. They are generally unconcerned with the welfare of others and therefore is unlikely to offer to others. Sometimes their skepticism about the motivations of others makes them suspicious, hostile and uncooperative. Socialization is obviously advantageous to achieve and maintain popularity. Sociable people are more dear than non-social. Moreover, Socialization is not useful in situations that require decisions absolutely difficult or objective. Non-sociable people can become excellent scientists, critics, or soldiers.<br><b>Facets of Socialization:</b><br><b>Trust</b> - A person with high trust assumes that most people are fair, honest and has good intentions. People with low trust see others as selfish, dishonest and potentially dangerous. His confidence level is low.<br><b>Morality</b> - People with high scores on this scale see no need to fake or manipulate when dealing with others and are therefore candid, frank and sincere.<br><b>Altruism</b> - altruistic people feel that helping others is truly rewarding. Consequently, they are usually willing to help those in need.<br><b>Cooperation</b> - Individuals with high scores on this scale dislike confrontations. They are perfectly willing to compromise or to deny their own needs to get along with others.<br><b>Modesty</b> - People with high scores on this scale do not like to say they are better than others. In some cases, this attitude may result from low self-confidence and self esteem.<br><b>Compassion</b> - People with high scores on this are tender and compassionate. They feel the pain of others indirectly and easily feel sorry.',
	'titulo-ver-realizacao-neo':'Realization NEO',
	'label-conteudo-realizacao':'<b>Realization</b> - Realization is the way in which we control, regulate and direct our impulses. Impulses are not inherently bad, sometimes time constraints require a snap decision and act on our first impulse can be an effective response. Moreover, in times of distraction rather than work, acting spontaneously and impulsively can be fun. Impulsive individuals may be seen by others as colorful, fun and clowns. However, by acting impulse can lead to problems in a number of ways. Some impulses are antisocial. Uncontrolled antisocial acts not only harm other members of society, but also can result in punishment for the perpetrator of such impulsive acts. Another problem with impulsive acts is that they often produce immediate rewards but undesirable consequences in the long term. Examples include excessive socialization that leads to being fired from a job, throw an insult that causes the end of an important relationship, or using pleasure-inducing drugs that eventually destroy sa&uacute;de.O impulsive behavior, even when not seriously destructive, diminishes the effectiveness of a person in significant ways. Lets not act impulsively contemplate alternative courses of action, some of which would have been wiser than the impulsive choice. Impulsivity also diverts people during projects that require sequences of steps or stages organized. The achievements of an impulsive person are therefore small, scattered and inconsistent. The benefits are obvious high-Realization. Individuals filmmakers avoid problems and achieve high levels of success through purposeful planning and persistence. They are also positively regarded by others as intelligent and reliable. On the negative side, they can be compulsive perfectionists and workaholics. In addition, individuals can be considered extremely filmmakers boring and tedious. People non-achievers can be criticized for their unreliability, lack of ambition, and not stay inside the lines, but will experience many pleasures brief and will never be called boring.<br><b>Facets of Realization:</b><br><b>Self-efficacy</b> - Self-efficacy describes the confidence in their ability to accomplish things. People with high scores believe they have the intelligence (common sense), energy and self-control necessary to achieve success.<br><b>Order</b> - People with high scores in order are well organized. They like to live according to routines and schedules. They keep lists and make plans.<br><b>Sense of duty</b> - This scale reflects the strength of the sense of duty and obligation of a person. Those who achieve high scores on this scale have a strong sense of moral obligation.<br><b>Commitment</b> - Individuals with high scores on this scale work hard to achieve excellence. Their efforts to be recognized as successful keeps them in line toward the high goals. They usually have a strong sense of direction in life, but extremely high scores may be overly focused and obsessed with his work.<br><b>Self-Discipline</b> - Self-discipline, which many call willpower, refers to the ability to persist at difficult or unpleasant tasks until they are completed.<br><b>Prudence</b> - Prudence describes the disposition to think through possibilities before acting. People with high scores on the scale of prudence lead time in making decisions.',
	'titulo-ver-neuroticismo-neo':'Neuroticism NEO',
	'label-conteudo-neuroticismo':'<b>Neuroticism</b> - Freud originally used the term neurosis to describe a condition marked by mental anguish, emotional distress and an inability to deal effectively with the normal demands of life. He suggested that everyone shows some signs of neurosis, but that we differ in our degree of suffering and our specific symptoms of distress. Today, Neuroticism refers to the tendency to experience negative feelings. Those with high scores on Neuroticism may experience primarily one specific negative feeling such as anxiety, anger or depression, but are likely to experience several of these emotions. People with high scores on Neuroticism are emotionally reactive. They respond emotionally to events that would not affect most people, and their reactions tend to be more intense than normal. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult. Their negative emotional reactions tend to persist for an unusually long period of time, which means they are often in a bad mood. These problems with emotional regulation can diminish a neurotic\'s ability to think clearly, make decisions and deal effectively with stress. At the other end of the scale, individuals with low scores in Neuroticism are less easily upset and are less emotionally reactive. They tend to be calm, emotionally stable and free from persistent negative feelings. Be more free from negative feelings does not mean that people with low scores to experience many positive feelings, the frequency of positive emotions is a component of the Extraversion domain.<br><b>Facets of Neuroticism:</b><br><b>Anxiety</b> - The system of "fight or flight" of the brain of anxious individuals is too easily and often compromised. Therefore, people with high scores in anxiety often feel that something dangerous is about to happen.<br><b>Anger</b> - People with high scores in anger they feel angry when things do not go your way. They are sensitive about being treated fairly and are resentful and bitter when they feel they are being deceived.<br><b>Depression</b> - This scale measures the tendency to feel sad, depressed and discouraged. People with high scores feel lacking in energy and have difficulty initiating activities.<br><b>Self-perception</b> - self-perceptive individuals are sensitive about what others think of them. His concern with rejection and ridicule makes them feel shy and uncomfortable around others. They feel easily embarrassed and often ashamed. Your fears that others will criticize them or make fun of them are exaggerated and unrealistic, but their awkwardness and discomfort may make these fears a self-fulfilling prophecy.<br><b>Lack of moderation</b> - moderate-Individuals not feel strong desires and anxieties to which they have difficulty resisting. They tend to be oriented towards the pleasures and rewards of short-term rather than long-term consequences.<br><b>Vulnerability</b> - People with high scores on Vulnerability experience panic, confusion and despair when under pressure or stress.',
	'titulo-ver-abertura-neo':'Opening NEO',
	'label-conteudo-abertura':'<b>Opening</b> - Opening describes a dimension of cognitive style that distinguishes imaginative, creative individuals and those down-to-earth, conventional. Open people are intellectually curious, enjoy the art and are sensitive to beauty. They tend to be, compared to closed people, more aware of their feelings. They tend to think and act in individualistic and nonconformist. Intellectuals typically score high on Openness, consequently, this factor has also been called Culture or Intellect. However, the Intellect is probably best seen as one aspect of the opening. Opening scores are only modestly related to years of schooling and scores on standardized tests of intelligence. Another feature of the open cognitive style is a facility for thinking in symbols and abstractions far removed from concrete experience. Depending on the individual\'s specific intellectual abilities, this symbolic cognition may take the form of mathematical thinking, logical or geometric, artistic and metaphorical use of language, music composition or performance, or one of many visual art and performance. People with low scores on Openness tend to have narrow interests and common. They prefer simple, straightforward and obvious to the subtle, complex and ambiguous. They can see the arts and sciences with suspicion, considering these efforts confusing and of no practical use. People closed prefer familiarity to novelty, are conservative and resistant to change. The opening is often presented as healthier or more mature by psychologists, who are often themselves open to experience. However, the open and closed styles are thought useful in different environments. The intellectual style of the open person may serve a professor well, but research has shown that closed thinking is related to superior performance in police work, a variety of sales and service occupations.<br><b>Facets of Opening:</b><br><b>Imagination</b> - To imaginative individuals, the real world is often too plain and simple. People with high scores on this scale use fantasy as a way of creating a world richer, more interesting.<br><b>Artistic Interests</b> - They become easily involved and absorbed in artistic and natural events. They are not necessarily artistically trained or talented, although many are. The characteristics that define this scale are interest in and appreciation of natural beauty and artificial.<br><b>Emotionality</b> - People with high Emotionality have good access to and awareness of their own feelings. People with low scores are less aware of their feelings and tend not to express their emotions openly.<br><b>Sense adventurer</b> - People with high scores on adventurous sense are eager to try new activities, travel in foreign lands and try different things. They find familiarity and routine boring, and will make a way back home just because he is different.<br><b>Intellect</b> - Intellect and artistic interests are the two most important aspects of the central opening. People with high scores on Intellect love to play with ideas. They have an open mind to new ideas and unusual, and like to debate intellectual issues. They like puzzles, riddles and puzzles.<br><b>Liberalism</b> - Psychological liberalism refers to the willingness to challenge authority, convention and traditional values??. In its most extreme form, psychological liberalism can even represent hostility toward rules, sympathy for offenders and love of ambiguity, chaos and disorder. Psychological conservatives prefer the security and stability brought by conformity to tradition. Psychological liberalism and conservatism are not identical to political affiliation, but certainly predispose people to certain political parties.',
	'titulo-extroversão-tipi':'Extroversion TIPI',
	'label-conteudo-extroversao-tipi':'The Extraversion is marked by a strong engagement with the outside world. Extroverts enjoy being with people, are full of energy and often experience positive emotions. They tend to be enthusiastic, action-oriented, individuals who are prone to say "Yes" or "Come on!" To opportunities for excitement. In groups, they like to talk, assert themselves and draw attention to themselves. The introverted, lack the exuberance, energy and activity levels of extroverts. Introverts tend to be quiet, discreet, thoughtful and disengaged from the social world. Their lack of social involvement should not be interpreted as shyness or depression; the introvert simply needs less stimulation than an extravert and prefers to be alone. The independence and reserve of the introvert is sometimes mistaken for hostility or arrogance. In fact, an introvert who scores high on Socialization dimension will not seek other people, but quite pleasant when approached.',
	'titulo-socializacao-tipi':'Socialization TIPI',
	'label-conteudo-socializacao-tipi':'The Extraversion is marked by a strong engagement with the outside world. Extroverts enjoy being with people, are full of energy and often experience positive emotions. They tend to be enthusiastic, action-oriented, individuals who are prone to say "Yes" or "Come on!" To opportunities for excitement. In groups, they like to talk, assert themselves and draw attention to themselves. The introverted, lack the exuberance, energy and activity levels of extroverts. Introverts tend to be quiet, discreet, thoughtful and disengaged from the social world. Their lack of social involvement should not be interpreted as shyness or depression; the introvert simply needs less stimulation than an extravert and prefers to be alone. The independence and reserve of the introvert is sometimes mistaken for hostility or arrogance. In fact, an introvert who scores high on Socialization dimension will not seek other people, but quite pleasant when approached.',
	'titulo-realizacao-tipi':'Realization TIPI',
	'label-conteudo-realizacao-tipi':'Realization is the way in which we control, regulate and direct our impulses. Impulses are not inherently bad, sometimes time constraints require a snap decision and act on our first impulse can be an effective response. Moreover, in times of distraction rather than work, acting spontaneously and impulsively can be fun. Impulsive individuals may be seen by others as colorful, fun and clowns. However, by acting impulse can lead to problems in a number of ways. Some impulses are antisocial. Uncontrolled antisocial acts not only harm other members of society, but also can result in punishment for the perpetrator of such impulsive acts. Another problem with impulsive acts is that they often produce immediate rewards but undesirable consequences in the long term. Examples include excessive socialization that leads to being fired from a job, throw an insult that causes the end of an important relationship, or using pleasure-inducing drugs that eventually destroy sa&uacute;de.O impulsive behavior, even when not seriously destructive, diminishes the effectiveness of a person in significant ways. Lets not act impulsively contemplate alternative courses of action, some of which would have been wiser than the impulsive choice. Impulsivity also diverts people during projects that require sequences of steps or stages organized. The achievements of an impulsive person are therefore small, scattered and inconsistent. A characteristic of intelligence, which potentially separates human beings from earlier life forms, is the ability to think about future consequences before acting on impulse. Intelligent activity involves contemplation of long-range goals, organizing and planning routes to these goals, objectives and persistence in spite of short pulses to the contrary. The idea that intelligence involves impulse control is well captured by the term prudence, an alternative label for the field of Attainment. Prudent means both wise when cautious. People with high scores on the scale of Achievement are actually perceived by others as intelligent. The benefits are obvious high-Realization. Individuals filmmakers avoid problems and achieve high levels of success through purposeful planning and persistence. They are also positively regarded by others as intelligent and reliable. On the negative side, they can be compulsive perfectionists and workaholics. In addition, individuals can be considered extremely filmmakers boring and tedious. People non-achievers can be criticized for their unreliability, lack of ambition, and not stay inside the lines, but will experience many pleasures brief and will never be called boring.',
	'titulo-estabilidade-emocional-tipi':'Emotional Stability',
	'label-conteudo-estabilidade-emocional-tipi':'The Emotional Stability is the great field of personality that is the extreme opposite trait of Neuroticism. Freud originally used the term neurosis to describe a condition marked by mental anguish, emotional distress and an inability to deal effectively with the normal demands of life. He suggested that everyone shows some signs of neurosis, but that we differ in our degree of suffering and our specific symptoms of distress. Today, Neuroticism refers to the tendency to experience negative feelings. Individuals with high scores on Emotional Stability are less easily upset and are less emotionally reactive. They tend to be calm, emotionally stable and free from persistent negative feelings. Be more free from negative feelings does not mean that people with high scores to experience many positive feelings, the frequency of positive emotions is a component of the Extraversion domain. Those with low scores on Emotional Stability may experience primarily one specific negative feeling such as anxiety, anger or depression, but are likely to experience several of these emotions. People with low scores in this area are emotionally reactive. They respond emotionally to events that would not affect most people, and their reactions tend to be more intense than normal. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult. Their negative emotional reactions tend to persist for an unusually long period of time, which means they are often in a bad mood. These problems with emotional regulation can diminish a neurotic\'s ability to think clearly, make decisions and deal effectively with stress.',
	'titulo-abertura-tipi':'Opening TIPI',
	'label-conteudo-abertura-tipi':'Opening describes a dimension of cognitive style that distinguishes imaginative, creative individuals and those down-to-earth, conventional. Open people are intellectually curious, enjoy the art and are sensitive to beauty. They tend to be, compared to closed people, more aware of their feelings. They tend to think and act in individualistic and nonconformist. Intellectuals typically score high on Openness, consequently, this factor has also been called Culture or Intellect. However, the Intellect is probably best seen as one aspect of the opening. Opening scores are only modestly related to years of schooling and scores on standardized tests of intelligence. Another feature of the open cognitive style is a facility for thinking in symbols and abstractions far removed from concrete experience. Depending on the individual\'s specific intellectual abilities, this symbolic cognition may take the form of mathematical thinking, logical or geometric, artistic and metaphorical use of language, music composition or performance, or one of many visual art and performance. People with low scores on Openness tend to have narrow interests and common. They prefer simple, straightforward and obvious to the subtle, complex and ambiguous. They can see the arts and sciences with suspicion, considering these efforts confusing and of no practical use. People closed prefer familiarity to novelty, are conservative and resistant to change. The opening is often presented as healthier or more mature by psychologists, who are often themselves open to experience. However, the open and closed styles are thought useful in different environments. The intellectual style of the open person may serve a professor well, but research has shown that closed thinking is related to superior performance in police work, a variety of sales and service occupations.',
	
		
	'escolha-de-idioma':'<option value="Yes">Yes</option><option value="No">No</option>',
	'escolha-sexo':'<option value="Male">Male</option><option value="Female">Female</option>',
	
	'titulo-grafico-tipi':'<b>Result TIPI</b>',
	'grafico_cinco_fatores-TIPI':'Graph TIPI  Download...',
	'div-grandes-fatores-tipi':'<ul data-role="listview"><p><br><li id="list-neo"><a href="#extroversao-tipi"><center><b>See Extraversion</b></center></a></li></p><p><br><li id="list-tipi"><a href="#socializacao-tipi"><center><b>See Socialization</b></center></a></li></p><p><br><li id="list-neo"><a href="#realizacao-tipi"><center><b>See Realization</b></center></a></li></p><p><br><li id="list-tipi"><a href="#estabilidade-emocional-tipi"><center><b>See Emotional Stability</b></center></a></li></p><p><br><li id="list-tipi"><a href="#abertura-tipi"><center><b>See Opening</b></center></a></li></p></ul>',

	'titulo-ver-extroversão-neo':'Extroversion NEO',

	'titulo-ver-socializacao-neo':'Socialization NEO',
/*
	'label-disc-total-neo':'<b>Totally disagree</b>',
	'label-disc-parci-neo':'<b>Partially disagree</b>',
	'label-nem-disc-nem-cord-neo':'<b>Neither agree nor disagree</b>',
	'label-conc-parcial-neo':'<b>Partially agree</b>',
	'label-conc-total-neo':'<b>Totally agree</b>',
	*/
	'titulo-grafico-neo':'Result NEO',
	
	'grafico_cinco_fatores':'Graph 1 Download...',
	'label-button-grafico-neo':'See the 5 factors',
	'grafico_extroversao':'Graph 2 Download...',
	'label-button-ver-extroversão-neo':'See Extroversion',
	'grafico_socializacao':'Graph 3 Download...',
	'label-button-ver-socializacao-neo':'See Socialization',
	'grafico_realizacao':'Graph 4 Download...',
	'label-button-ver-realizacao-neo':'See Realization',
	'grafico_neuroticismo':'Graph 5 Download...',
	'label-button-ver-neuroticismo-neo':'See Neuroticism',
	'grafico_abertura':'Graph 6 Download...',
	'label-button-ver-abertura-neo':'See Opening',
	
	'change_language':"<p align=\"center\"><img align=\"middle\" src=\"images/flag_brazil.png\" width=\"32\" height=\"32\" id=\"brasil\" onClick=\"mudaLingua()\" style=\"vertical-align:middle\"><label style=\"vertical-align:middle\"> PT</label></img></p>",
	
	'nav_home':'<img src="images/Img/Ingles/icon_home-us.png" id="home"/>',
	'nav_register':'<img src="images/Img/Ingles/icon_register.png" id="register" />',
	'nav_contact':'<img src="images/Img/Ingles/icon_contato-us.png" id="contato" />',
	'nav_about':'<img src="images/Img/Ingles/icon_sobre-us.png" id="sobre" />',
	'nav_options':'<img src="images/Img/Ingles/icon_opcoes-us.png" id="opcoes"/>',
	'nav_exit':'<img src="images/Img/Ingles/icon_sair-us.png" id="sair" />',
	'nav_continue':'<img src="images/Img/Ingles/icon_continuar-us.png" id="continuar" />'//,
	//'':'',
	//'':'',
}

var pt_dict = {
	// Muito usado
	'OK': 'OK',
	'Yes':  'Sim',
	'No':   'Não',
	'Cancel': 'Cancelar',
	'Voltar': 'Voltar',
	
	// Tela Login
	'Login': '<b>Entrar</b>',
	'Email': '<b> E-mail: </b>',
	'Password': '<b> Senha: </b>',
	'ForgotPass': '<b>Esqueceu a Senha?</b>',
	// Tela Recuperar Senha

	'TitlePassRecovery': '<b>Recuperar Senha</b>',
	'Recovery': '<b>Recuperar</b>',
	//Tela Instrucoes NEO IPIP

	'TitleNEOIPIP_instructions': 'Instruções NEO-IPIP',
	'conteudo-instrucao-NEO':'As pesquisas que utilizam os Inventarios de Personalidade est&atilde;o vinculados a v&aacute;rios projetos de pesquisa em desenvolvimento no <a href="http://www.dcomp.ufs.br" target="_blank" rel="external">Departamento de Computa&ccedil;&atilde;o</a> da <a href="http://www.ufs.br" target="_blank" rel="external">UFS</a> sob Coordena&ccedil;&atilde;o da <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Prof. Dra. Maria Augusta Silveira Netto Nunes</a> e sob tutela dos criadores dos testes, <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> e <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling.</a> Estes s&atilde;o inventarios de Personalidade, que funcionam da seguinte maneira: Ao iniciar o teste, ser&atilde;o apresentados a voce diversas senten&ccedil;as. Leia cada frase com aten&ccedil;&atilde;o e, em seguida, clique no bot&atilde;o que melhor indica a sua concordancia com o quanto a frase descreve voc&ecirc;, seguindo uma escala que vai desde "discordo totalmente" a "concordo totalmente" para o NEO-IPIP e para o TIPI. Ao final do questionario ser&aacute; gerado um relatorio com os resultados descritivos de sua Personalidade.',

	// Tela Instrucoes TIPI
	'titulo-instrucao-TIPI' : 'Instruções TIPI',
	'conteudo-instrucao-TIPI':'As pesquisas que utilizam os Inventarios de Personalidade estão vinculados a vários projetos de pesquisa em desenvolvimento no <a href="http://www.dcomp.ufs.br" target="_blank" rel="external">Departamento de Computação</a> da <a href="http://www.ufs.br" target="_blank" rel="external">UFS</a> sob Coordenação da <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Prof. Dra. Maria Augusta Silveira Netto Nunes</a> e sob tutela dos criadores dos testes, <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> e <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling.</a> Estes são inventarios de Personalidade, que funcionam da seguinte maneira: Ao iniciar o teste, serão apresentados a voce diversas sentenças. Leia cada frase com atenção e, em seguida, clique no botão que melhor indica a sua concordancia com o quanto a frase descreve você, seguindo uma escala que vai desde "discordo totalmente" a "concordo totalmente" para o NEO-IPIP e para o TIPI. Ao final do questionario será gerado um relatorio com os resultados descritivos de sua Personalidade.',
	

	// Tela Cadastro Usuario

	'titulo-instrucao-cadastro': '<b>Novo Usuário</b>',
	'nome-cadastro': '<b> Nome:</b>',
	're_senha-cadastro' : '<b> Redigite a senha:</b>',
	'sexo-cadastro':'<b> Sexo:</b>',
	'escolha-sexo':'<option value="Masculino">Masculino</option><option value="Feminino">Feminino</option>',
	'idade-cadastro': '<b> Idade:</b>',
	'idioma-cadastro':'<b> Idioma:</b>',
	'escolha-de-idioma':'<option value="Sim">Sim</option><option value="Não">N&atilde;o</option>',
	'politica':'<b> Política:</b>',
	'texto-politica':'Todas as respostas deste questionário são completamente confidenciais e não serão associadas a você como indivíduo.',
	'aceita-cadastro':'<b> Aceita?</b>',
	'label-button-cadastrar':'<b>Cadastrar</b>',
	// Tela Contato

	'titulo-contato':'<b>Contato</b>',
	'titulo-conteudo-contato':'<b>Entre em contato conosco:</b>',
	'orientadora':'Dr&ordf; Maria Augusta Silveira Neto Nunes&nbsp; (Orientadora):',
	'christiano':'Christiano Santana (Graduando em Sistemas de Informa&ccedil;&atilde;o):',
	'igor':'Igor Pontes (Graduando em Ci&ecirc;ncia da Computa&ccedil;&atilde;o):',
	
	'railan':'Railan Xisto (Graduando em Ci&ecirc;ncia da Computa&ccedil;&atilde;o):',
	// ver como organizar o resto da tela de contato que estao sem IDs

	// Tela Sobre

	'titulo-sobre':'<b>Sobre</b>',
	'texto-conteudo-sobre':'Este projeto foi desenvolvido pelos alunos de gradua&ccedil;&atilde;o Christiano Santana - Igor Pontes - Jonas Bezerra - Railan Xisto sob orienta&ccedil;&atilde;o da professora <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Dr&ordf;. Maria Augusta Silveira Netto Nunes</a> do <a href="http://www.decomp.ufs.br" target="_blank" rel="external">Departamento de Computa&ccedil;&atilde;o</a> da <a href="http://www.ufs.br" target="_blank" rel="external">Universidade Federal de Sergipe</a>.<br><br>As pesquisas que utilizam os Invent&aacute;rios de Personalidade citados abaixo est&atilde;o vinculados a v&aacute;rios projetos de pesquisa em desenvolvimento no Departamento de Computa&ccedil;&atilde;o da Universidade Federal de Sergipe sob coordena&ccedil;&atilde;o da <a href="http://www.dcomp.ufs.br/~gutanunes/" target="_blank" rel="external">Prof. Dr&ordf;. Maria Augusta Silveira Netto Nunes</a> e sob tutela dos criadores dos Testes, <a href="http://john.johnson.socialpsychology.org/" target="_blank" rel="external">Dr. John Johnson</a> e <a href="http://homepage.psy.utexas.edu/homepage/faculty/gosling/index.htm" target="_blank" rel="external">Dr. Samuel Gosling</a>.',
	'sobre-inventario':'<b>Sobre os inventários:</b>',
	'ipip':'<b>Inventário IPIP</b><br>(International Personality Item Pool)',
	'tipi':'<b>Inventário do TIPI</b><br>(Ten Item Personality Inventory)',
	// Tela IPIP

	'titulo-ipip':'<b>Inventário IPIP</b>',
	'texto-conteudo-ipip':'Segundo o Dr. Lewis R. Goldberg e o Dr. Gerard Saucier (Investigador principal e Co-investigador, respectivamente), o <a href="http://ipip.ori.org/ipip/">cons&oacute;rcio IPIP</a> é um trabalho científico em conjunto para o desenvolvimento de medidas avançadas de personalidade e outras Diferenças Individuais.<br><br>O IPIP destina-se a fornecer acesso r&aacute;pido &agrave;s medidas de diferen&ccedil;as individuais, tudo no dom&iacute;nio p&uacute;blico, a serem desenvolvidas conjuntamente entre os cientistas de todo o mundo. Mais tarde, o site poder&aacute; incluir dados brutos dispon&iacute;veis para re-an&aacute;lise e, al&eacute;m disso, deve servir como um f&oacute;rum para a dissemina&ccedil;&atilde;o de id&eacute;ias e resultados de pesquisas psicom&eacute;tricas.',
	// Tela TIPI

	'titulo-tipi':'<b>Inventário TIPI</b>',
	'texto-conteudo-tipi':'Segundo Gosling, "Quando o tempo é limitado, os pesquisadores podem ser confrontados com a escolha entre utilizar uma medida extremamente sucinta das Cinco Grandes dimensões de personalidade ou não utilizar medida alguma. Para atender à necessidade de uma medida muito breve, inventários de 5 a 10 itens foram desenvolvidos e avaliados. Embora um tanto inferiores aos instrumentos multi-itens padronizados, os instrumentos atingiram níveis adequados em termos de (a) convergência com medidas amplamente utilizadas dos Cinco Grandes Fatores em relatórios próprios, de observadores e de pares, (b) confiabilidade teste - reteste, (c) padrões de correlações externas previstas e (d) convergência entre as avaliações próprias e de observadores."',
	// Tela Personality Inventory

	'texto-conteudo-escolha':'Olá. Selecione uma das opções abaixo para continuar o inventário:',
	// Tela Alterar Senha

	'titulo-opcoes':'<b>Alterar Senha</b>',
	'label-senha-opcoes':'<b>Digite senha atual:</b>',
	'label-novasenha-opcoes':'<b>Digite nova senha:</b>',
	'label-button-alterar':'<b>Alterar</b>',
	// Telas perguntas dos inventarios

	// Telas de Conclusao

	'titulo-saudacao-neo':'Conclusão do Inventário',
	'texto-conteudo-saudacao-neo':'<br><center>PARABÉNS!</center><br> Seu Questionário NEO-IPIP foi realizado e efetuado com Sucesso.<br> <br>Clique no botão abaixo para ver o gráfico referente a sua personalidade com detalhes corespondente ao inventário.',
	'label-button-saudacao-neo':'<b>Gráfico NEO</b>',
	'titulo-saudacao-tipi':'Conclusão do Inventário',
	'texto-conteudo-saudacao-tipi':'<br><center>PARABÉNS!</center><br> Seu Questionário TIPI foi realizado e efetuado com Sucesso.<br> <br>Clique no botão abaixo para ver o gráfico referente a sua personalidade com detalhes corespondente ao inventário.',
	'label-button-saudacao-tipi':'<b>Gráfico TIPI</b>',
	'label-conteudo-extroversão':'<b>Extrovers&atilde;o</b> - A Extrovers&atilde;o &eacute; marcada por um forte engajamento com o mundo externo. Extrovertidos gostam de estar com as pessoas, s&atilde;o cheios de energia e muitas vezes experimentam emo&ccedil;&otilde;es positivas. Eles tendem a ser entusiastas, orientados para a a&ccedil;&atilde;o, indiv&iacute;duos que s&atilde;o propensos a dizer "Sim!" ou "Vamos!" &agrave;s oportunidades de excita&ccedil;&atilde;o. Em grupos, eles gostam de falar, afirmar-se e chamar a aten&ccedil;&atilde;o para si. Aos introvertidos, falta a exuber&acirc;ncia, energia e os n&iacute;veis de atividade dos extrovertidos. Introvertidos tendem a ser silenciosos, discretos, ponderados e desengajados do mundo social. A sua falta de participa&ccedil;&atilde;o social n&atilde;o deve ser interpretada como timidez ou depress&atilde;o; o introvertido simplesmente precisa de menos estimula&ccedil;&atilde;o do que um extrovertido e prefere ficar sozinho. A independ&ecirc;ncia e reserva do introvertido &eacute; por vezes confundida com hostilidade ou arrog&acirc;ncia. Na verdade, um introvertido que pontua alto na dimens&atilde;o Socializa&ccedil;&atilde;o n&atilde;o procurar&aacute; outras pessoas, mas ser&aacute; bastante agrad&aacute;vel quando abordado.<br><b>Facetas da Extrovers&atilde;o:</b><br><b>Amigabilidade</b> - Pessoas amig&aacute;veis gostam genuinamente de outras pessoas e demonstram abertamente sentimentos positivos em rela&ccedil;&atilde;o aos outros.<br><b>Gregarismo</b> - Pessoas greg&aacute;rias v&ecirc;em a companhia de outros como agradavelmente estimulante e gratificante. Elas gostam da excita&ccedil;&atilde;o de multid&otilde;es.<br><b>Assertividade</b> - Pessoas com escores altos em assertividade gostam de falar, tomar conta e dirigir as atividades dos outros. Elas tendem a ser l&iacute;deres em grupos.<br><b>N&iacute;vel de atividade</b> - Indiv&iacute;duos ativos levam vidas aceleradas e ocupadas. Elas se movem rapidamente, de forma en&eacute;rgica e vigorosa, e est&atilde;o envolvidas em muitas atividades.<br><b>Procura por excita&ccedil;&atilde;o</b> - Pessoas com escores altos nesta escala ficam facilmente entediados se n&atilde;o tiverem altos n&iacute;veis de estimula&ccedil;&atilde;o. Elas adoram luzes, movimento e alvoro&ccedil;o.<br><b>Bom humor</b> - Esta escala mensura o humor e sentimentos positivos, e n&atilde;o as emo&ccedil;&otilde;es negativas (que s&atilde;o uma parte do dom&iacute;nio do Neuroticismo).',
	'label-conteudo-socializacao':'<b>Socializa&ccedil;&atilde;o</b> - A Socializa&ccedil;&atilde;o reflete diferen&ccedil;as individuais na preocupa&ccedil;&atilde;o com a coopera&ccedil;&atilde;o e harmonia social. Indiv&iacute;duos soci&aacute;veis valorizam a conviv&ecirc;ncia com os outros. Eles s&atilde;o, portanto, atenciosos, simp&aacute;ticos, generosos, prestativos e dispostos a comprometer os seus interesses com os dos outros. Pessoas soci&aacute;veis tamb&eacute;m t&ecirc;m uma vis&atilde;o otimista da natureza humana. Elas acreditam que as pessoas s&atilde;o, basicamente, honestas, decentes e dignas de confian&ccedil;a. Indiv&iacute;duos n&atilde;o-soci&aacute;veis colocam o interesse pr&oacute;prio acima da conviv&ecirc;ncia com os outros. Eles s&atilde;o geralmente despreocupados com o bem-estar dos outros e, portanto, &eacute; improv&aacute;vel que se ofere&ccedil;am para outras pessoas. &Agrave;s vezes, seu ceticismo sobre as motiva&ccedil;&otilde;es dos outros faz com que sejam suspeitos, hostis, e n&atilde;o-cooperativos. A Socializa&ccedil;&atilde;o &eacute; obviamente vantajosa para atingir e manter popularidade. Pessoas soci&aacute;veis s&atilde;o mais queridas que as n&atilde;o-soci&aacute;veis. Por outro lado, a Socializa&ccedil;&atilde;o n&atilde;o &eacute; &uacute;til em situa&ccedil;&otilde;es que exigem decis&otilde;es dif&iacute;ceis ou absolutamente objetivas. Pessoas n&atilde;o-soci&aacute;veis podem tornar-se excelentes cientistas, cr&iacute;ticos ou soldados.<br><b>Facetas da Socializa&ccedil;&atilde;o:</b><br><b>Confian&ccedil;a</b> - Uma pessoa com alta confian&ccedil;a pressup&otilde;e que a maioria das pessoas &eacute; justa, honesta e tem boas inten&ccedil;&otilde;es. Pessoas com baixa confian&ccedil;a v&ecirc;em o outro como ego&iacute;sta, desonesto, e potencialmente perigoso. Seu n&iacute;vel de confian&ccedil;a &eacute; baixo.<br><b>Moralidade</b> - Pessoas com escores altos nesta escala n&atilde;o v&ecirc;em necessidade de fingir ou manipular quando lidam com os outros e s&atilde;o, portanto, c&acirc;ndidos, francos e sinceros.<br><b>Altru&iacute;smo</b> - Pessoas altru&iacute;stas sentem que ajudar outras pessoas &eacute; genuinamente gratificante. Conseq&uuml;entemente, elas geralmente est&atilde;o dispostas a ajudar aqueles que est&atilde;o em necessidade.<br><b>Coopera&ccedil;&atilde;o</b> - Indiv&iacute;duos com escores altos nesta escala n&atilde;o gostam de confrontos. Eles est&atilde;o perfeitamente dispostos a se comprometer ou a negar as suas pr&oacute;prias necessidades para se dar bem com os outros.<br><b>Mod&eacute;stia</b> - Pessoas com escores altos nesta escala n&atilde;o gostam de afirmar que s&atilde;o melhores do que os outros. Em alguns casos, esta atitude pode resultar de baixa auto-confian&ccedil;a e auto-estima.<br><b>Compaix&atilde;o</b> - Pessoas com escores altos nesta s&atilde;o ternas e compassivas. Elas sentem a dor dos outros indiretamente e facilmente sentem pena.',
	'titulo-ver-realizacao-neo':'Realiza&ccedil;&atilde;o NEO',
	'label-conteudo-realizacao':'<b>Realiza&ccedil;&atilde;o</b> - A Realiza&ccedil;&atilde;o trata da maneira pela qual n&oacute;s controlamos, regulamos e direcionamos os nossos impulsos. Os impulsos n&atilde;o s&atilde;o inerentemente maus; &agrave;s vezes restri&ccedil;&otilde;es de tempo requerem uma decis&atilde;o precipitada e agir em nosso primeiro impulso pode ser uma resposta eficaz. Al&eacute;m disso, nas horas de distra&ccedil;&atilde;o ao inv&eacute;s de trabalho, atuar de forma espont&acirc;nea e impulsiva pode ser divertido. Indiv&iacute;duos impulsivos podem ser vistos pelos outros como pitorescos, divertidos e palha&ccedil;os. N&atilde;o obstante, agir por impulso pode levar a problemas em uma s&eacute;rie de maneiras. Alguns impulsos s&atilde;o anti-sociais. Atos anti-sociais descontrolados n&atilde;o s&oacute; prejudicam outros membros da sociedade, como tamb&eacute;m podem resultar em puni&ccedil;&atilde;o para o autor de tais atos impulsivos. Outro problema com os atos impulsivos &eacute; que muitas vezes eles produzem recompensas imediatas, mas conseq&uuml;&ecirc;ncias indesej&aacute;veis em longo prazo. Exemplos incluem excesso de Socializa&ccedil;&atilde;o que leva a ser demitido de um emprego, lan&ccedil;ar um insulto que provoca o t&eacute;rmino de um relacionamento importante, ou utilizar drogas indutoras de prazer que, eventualmente, destroem a sa&uacute;de.O comportamento impulsivo, mesmo quando n&atilde;o seriamente destrutivo, diminui a efic&aacute;cia de uma pessoa de maneiras significativas. Agir impulsivamente n&atilde;o permite contemplar cursos alternativos de a&ccedil;&atilde;o, alguns dos quais teriam sido mais s&aacute;bios do que a escolha impulsiva. A impulsividade tamb&eacute;m desvia as pessoas durante projetos que requerem seq&uuml;&ecirc;ncias de etapas ou est&aacute;gios organizados. As realiza&ccedil;&otilde;es de uma pessoa impulsiva s&atilde;o, portanto, pequenas, dispersas e inconsistentes. Os benef&iacute;cios de alta Realiza&ccedil;&atilde;o s&atilde;o &oacute;bvios. Indiv&iacute;duos realizadores evitam problemas e alcan&ccedil;am altos n&iacute;veis de sucesso atrav&eacute;s de planejamento e persist&ecirc;ncia propositais. Eles tamb&eacute;m s&atilde;o positivamente considerados por outros como inteligentes e confi&aacute;veis. Do lado negativo, eles podem ser perfeccionistas compulsivo e workaholics. Al&eacute;m disso, indiv&iacute;duos extremamente realizadores podem ser considerados enfadonhos e entediantes. Pessoas n&atilde;o-realizadoras podem ser criticadas por sua n&atilde;o-confiabilidade, falta de ambi&ccedil;&atilde;o, e por n&atilde;o ficar dentro das linhas, mas v&atilde;o experimentar muitos prazeres breves e nunca ser&atilde;o chamados de enfadonhos.<br><b>Facetas da Realiza&ccedil;&atilde;o:</b><br><b>Auto-efic&aacute;cia</b> - A auto-efic&aacute;cia descreve a confian&ccedil;a na pr&oacute;pria capacidade de realizar coisas. Pessoas com escores altos acreditam que t&ecirc;m a intelig&ecirc;ncia (senso comum), energia e autocontrole necess&aacute;rios para alcan&ccedil;ar o sucesso.<br><b>Ordem</b> - Pessoas com escores altos em ordem s&atilde;o bem organizadas. Elas gostam de viver segundo rotinas e hor&aacute;rios. Elas mant&ecirc;m listas e fazem planos.<br><b>Senso de dever</b> - Esta escala reflete a for&ccedil;a do senso de dever e obriga&ccedil;&atilde;o de uma pessoa. Aqueles que atingem escores altos nesta escala t&ecirc;m um forte senso de obriga&ccedil;&atilde;o moral.<br><b>Empenho</b> - Indiv&iacute;duos com escores altos nesta escala trabalham duro para atingir a excel&ecirc;ncia. Seus esfor&ccedil;os para serem reconhecidos como bem sucedidos os mant&ecirc;m na linha em dire&ccedil;&atilde;o a objetivos elevados. Eles geralmente t&ecirc;m um forte senso de dire&ccedil;&atilde;o na vida, mas escores extremamente altos podem ser exageradamente focados e obcecados com seu trabalho.<br><b>Autodisciplina</b> - A autodisciplina, que muitos chamam de for&ccedil;a de vontade, refere-se &agrave; capacidade de persistir em tarefas dif&iacute;ceis ou desagrad&aacute;veis at&eacute; que sejam conclu&iacute;das.<br><b>Prud&ecirc;ncia</b> - A prud&ecirc;ncia descreve a disposi&ccedil;&atilde;o para pensar nas possibilidades antes de agir. Pessoas com escores altos na escala de prud&ecirc;ncia levam um tempo na tomada de decis&otilde;es.',
	'titulo-ver-neuroticismo-neo':'Neuroticismo NEO',
	'label-conteudo-neuroticismo':'<b>Neuroticismo</b> - Freud originalmente utilizava o termo neurose para descrever uma condi&ccedil;&atilde;o marcada por uma ang&uacute;stia mental, sofrimento emocional e uma incapacidade de lidar eficazmente com as exig&ecirc;ncias normais da vida. Ele sugeriu que todos mostram alguns sinais de neurose, mas que nos diferenciamos em nosso grau de sofrimento e em nossos sintomas espec&iacute;ficos de ang&uacute;stia. Hoje, o Neuroticismo refere-se &agrave; tend&ecirc;ncia a experimentar sentimentos negativos. Aqueles com escores altos em Neuroticismo podem experimentar principalmente um sentimento negativo espec&iacute;fico, como ansiedade, raiva ou depress&atilde;o, mas s&atilde;o suscet&iacute;veis a experimentar v&aacute;rias dessas emo&ccedil;&otilde;es. Pessoas com escores altos em Neuroticismo s&atilde;o emocionalmente reativas. Elas respondem emocionalmente a eventos que n&atilde;o afetariam a maioria das pessoas, e suas rea&ccedil;&otilde;es tendem a ser mais intensas que o normal. Elas s&atilde;o mais propensas a interpretar situa&ccedil;&otilde;es comuns como amea&ccedil;as, e frustra&ccedil;&otilde;es menores como irremediavelmente dif&iacute;ceis. Suas rea&ccedil;&otilde;es emocionais negativas tendem a persistir por um per&iacute;odo excepcionalmente longo de tempo, o que significa que est&atilde;o frequentemente de mau humor. Esses problemas com regula&ccedil;&atilde;o emocional podem diminuir a capacidade de um neur&oacute;tico de pensar claramente, tomar decis&otilde;es e lidar eficientemente com o stress. No outro extremo da escala, os indiv&iacute;duos com baixos escores em Neuroticismo ficam menos facilmente chateados e s&atilde;o menos reativos emocionalmente. Eles tendem a ser calmos, emocionalmente est&aacute;veis e livre de sentimentos negativos persistentes. Estar mais livres de sentimentos negativos n&atilde;o significa que pessoas com baixos escores experimentem muitos sentimentos positivos; a freq&uuml;&ecirc;ncia de emo&ccedil;&otilde;es positivas &eacute; um componente do dom&iacute;nio Extrovers&atilde;o.<br><b>Facetas do Neuroticismo:</b><br><b>Ansiedade</b> - O sistema de "luta ou fuga" do c&eacute;rebro de indiv&iacute;duos ansiosos &eacute; muito facilmente e geralmente comprometido. Portanto, pessoas com escores altos em ansiedade muitas vezes sentem que algo perigoso est&aacute; para acontecer.<br><b>Raiva</b> - Pessoas com escores altos em raiva sentem raiva quando as coisas n&atilde;o v&atilde;o do seu jeito. Elas s&atilde;o sens&iacute;veis sobre serem tratadas de forma justa e ficam ressentidas e amarguradas quando sentem que est&atilde;o sendo enganadas.<br><b>Depress&atilde;o</b> - Esta escala mede a tend&ecirc;ncia a se sentir triste, deprimido e desencorajado. Pessoas com escores altos se sentem com falta de energia e t&ecirc;m dificuldade de iniciar atividades.<br><b>Auto-percep&ccedil;&atilde;o</b> - Indiv&iacute;duos auto-perceptivos s&atilde;o sens&iacute;veis sobre o que os outros pensam deles. Sua preocupa&ccedil;&atilde;o com a rejei&ccedil;&atilde;o e o rid&iacute;culo faz com que eles se sintam t&iacute;midos e desconfort&aacute;veis ao redor de outros. Eles sentem-se facilmente constrangidos e muitas vezes envergonhados. Seus medos de que os outros v&atilde;o critic&aacute;-los ou tirar sarro deles s&atilde;o exagerados e irreais, mas a sua estranheza e desconforto podem tornar esses medos uma profecia auto-realiz&aacute;vel.<br><b>Falta de modera&ccedil;&atilde;o</b> - Indiv&iacute;duos n&atilde;o-moderados sentem fortes desejos e &acirc;nsias aos quais eles t&ecirc;m dificuldade em resistir. Tendem a ser orientados para os prazeres e recompensas de curto prazo, ao inv&eacute;s de consequ&ecirc;ncias em longo prazo.<br><b>Vulnerabilidade</b> - Pessoas com escores altos em vulnerabilidade experimentam p&acirc;nico, confus&atilde;o e desespero quando sob press&atilde;o ou estresse.',
	'titulo-ver-abertura-neo':'Abertura NEO',
	'label-conteudo-abertura':'<b>Abertura</b> - Abertura descreve uma dimens&atilde;o de estilo cognitivo que distingue entre indiv&iacute;duos imaginativos e criativos e aqueles p&eacute;-no-ch&atilde;o, convencionais. Pessoas abertas s&atilde;o intelectualmente curiosas, apreciam a arte e s&atilde;o sens&iacute;veis &agrave; beleza. Eles tendem a ser, comparados &agrave;s pessoas fechadas, mais conscientes de seus sentimentos. Tendem a pensar e agir de forma individualista e n&atilde;o-conformista. Intelectuais normalmente pontuam alto em Abertura; conseq&uuml;entemente, esse fator tamb&eacute;m tem sido chamado de Cultura ou Intelecto. N&atilde;o obstante, o Intelecto &eacute; provavelmente melhor considerado como um aspecto da Abertura. Escores em Abertura s&atilde;o apenas modestamente relacionados com os anos de escolaridade e os escores em testes padr&otilde;es de intelig&ecirc;ncia. Outra caracter&iacute;stica do estilo cognitivo aberto &eacute; uma facilidade para pensar em s&iacute;mbolos e abstra&ccedil;&otilde;es distantes da experi&ecirc;ncia concreta. Dependendo das habilidades intelectuais espec&iacute;ficas do indiv&iacute;duo, essa cogni&ccedil;&atilde;o simb&oacute;lica pode assumir a forma de pensamento matem&aacute;tico, l&oacute;gico ou geom&eacute;trico, uso art&iacute;stico e metaf&oacute;rico da linguagem, composi&ccedil;&atilde;o ou performance musical, ou uma das muitas artes visuais e de performance. Pessoas com baixos escores em Abertura tendem a ter interesses limitados e comuns. Elas preferem o simples, direto e &oacute;bvio ao sutil, complexo e amb&iacute;guo. Podem enxergam as artes e ci&ecirc;ncias com desconfian&ccedil;a, considerando estes esfor&ccedil;os confusos e de nenhum uso pr&aacute;tico. Pessoas fechadas preferem a familiaridade &agrave; novidade, s&atilde;o conservadoras e resistentes &agrave; mudan&ccedil;a. A Abertura &eacute; muitas vezes apresentada como mais saud&aacute;vel ou mais madura por psic&oacute;logos, que s&atilde;o muitas vezes eles mesmos abertos &agrave; experi&ecirc;ncia. No entanto, os estilos aberto e fechado de pensamento s&atilde;o &uacute;teis em ambientes diferentes. O estilo intelectual da pessoa aberta pode servir bem a um professor, mas pesquisas t&ecirc;m demonstrado que o pensamento fechado est&aacute; relacionado a um desempenho superior nos trabalhos de policial, vendas e uma variedade de ocupa&ccedil;&otilde;es de servi&ccedil;o.<br><b>Facetas da Abertura:</b><br><b>Imagina&ccedil;&atilde;o</b> - Para os indiv&iacute;duos imaginativos, o mundo real &eacute; muitas vezes demasiado simples e comum. Pessoas com escores altos nesta escala usam a fantasia como forma de criar um mundo mais rico, mais interessante.<br><b>Interesses art&iacute;sticos</b> - Tornam-se facilmente envolvidas e absorvidas em eventos art&iacute;sticos e naturais. Elas n&atilde;o s&atilde;o, necessariamente, treinadas artisticamente ou talentosas, embora muitas sejam. As caracter&iacute;sticas que definem esta escala s&atilde;o o interesse e a aprecia&ccedil;&atilde;o da beleza natural e artificial.<br><b>Emotividade</b> - Pessoas com alta Emotividade t&ecirc;m um bom acesso aos e consci&ecirc;ncia dos seus pr&oacute;prios sentimentos. Pessoas com baixos escores s&atilde;o menos conscientes dos seus sentimentos e tendem a n&atilde;o expressar suas emo&ccedil;&otilde;es abertamente.<br><b>Senso aventureiro</b> - Pessoas com escores altos em senso aventureiro s&atilde;o ansiosas para experimentar atividades novas, viajar por terras estrangeiras e provar coisas diferentes. Eles acham a familiaridade e a rotina chatas, e ir&atilde;o fazer um caminho para casa s&oacute; porque ele &eacute; diferente.<br><b>Intelecto</b> - O intelecto e os interesses art&iacute;sticos s&atilde;o os dois aspectos mais importantes e centrais da Abertura. Pessoas com escores altos em Intelecto gostam de brincar com id&eacute;ias. Elas t&ecirc;m a mente aberta a ideias novas e inusitadas, e gostam de debater quest&otilde;es intelectuais. Elas gostam de charadas, enigmas e quebra-cabe&ccedil;as.<br><b>Liberalismo</b> - O liberalismo psicol&oacute;gico refere-se &agrave; vontade de desafiar a autoridade, a conven&ccedil;&atilde;o e os valores tradicionais. Em sua forma mais extrema, o liberalismo psicol&oacute;gico pode at&eacute; representar hostilidade para com as regras, simpatia por infratores e amor &agrave; ambiguidade, ao caos e &agrave; desordem. Conservadores psicol&oacute;gicos preferem a seguran&ccedil;a e a estabilidade trazidas pela conformidade com a tradi&ccedil;&atilde;o. O liberalismo e o conservadorismo psicol&oacute;gicos n&atilde;o s&atilde;o id&ecirc;nticos &agrave; filia&ccedil;&atilde;o partid&aacute;ria, mas certamente predisp&otilde;em as pessoas a determinados partidos pol&iacute;ticos.',
	'titulo-extroversão-tipi':'Extrovers&atilde;o TIPI',
	'label-conteudo-extroversao-tipi':'A Extrovers&atilde;o &eacute; marcada por um forte engajamento com o mundo externo. Extrovertidos gostam de estar com as pessoas, s&atilde;o cheios de energia e muitas vezes experimentam emo&ccedil;&otilde;es positivas. Eles tendem a ser entusiastas, orientados para a a&ccedil;&atilde;o, indiv&iacute;duos que s&atilde;o propensos a dizer &ldquo;Sim!&rdquo; ou &ldquo;Vamos!&rdquo; &agrave;s oportunidades de excita&ccedil;&atilde;o. Em grupos, eles gostam de falar, afirmar-se e chamar a aten&ccedil;&atilde;o para si. Aos introvertidos, falta a exuber&acirc;ncia, energia e os n&iacute;veis de atividade dos extrovertidos. Introvertidos tendem a ser silenciosos, discretos, ponderados e desengajados do mundo social. A sua falta de participa&ccedil;&atilde;o social n&atilde;o deve ser interpretada como timidez ou depress&atilde;o; o introvertido simplesmente precisa de menos estimula&ccedil;&atilde;o do que um extrovertido e prefere ficar sozinho. A independ&ecirc;ncia e reserva do introvertido &eacute; por vezes confundida com hostilidade ou arrog&acirc;ncia. Na verdade, um introvertido que pontua alto na dimens&atilde;o Socializa&ccedil;&atilde;o n&atilde;o procurar&aacute; outras pessoas, mas ser&aacute; bastante agrad&aacute;vel quando abordado.',
	'titulo-socializacao-tipi':'Socializa&ccedil;&atilde;o TIPI',
	'label-conteudo-socializacao-tipi':'A Extrovers&atilde;o &eacute; marcada por um forte engajamento com o mundo externo. Extrovertidos gostam de estar com as pessoas, s&atilde;o cheios de energia e muitas vezes experimentam emo&ccedil;&otilde;es positivas. Eles tendem a ser entusiastas, orientados para a a&ccedil;&atilde;o, indiv&iacute;duos que s&atilde;o propensos a dizer &ldquo;Sim!&rdquo; ou &ldquo;Vamos!&rdquo; &agrave;s oportunidades de excita&ccedil;&atilde;o. Em grupos, eles gostam de falar, afirmar-se e chamar a aten&ccedil;&atilde;o para si. Aos introvertidos, falta a exuber&acirc;ncia, energia e os n&iacute;veis de atividade dos extrovertidos. Introvertidos tendem a ser silenciosos, discretos, ponderados e desengajados do mundo social. A sua falta de participa&ccedil;&atilde;o social n&atilde;o deve ser interpretada como timidez ou depress&atilde;o; o introvertido simplesmente precisa de menos estimula&ccedil;&atilde;o do que um extrovertido e prefere ficar sozinho. A independ&ecirc;ncia e reserva do introvertido &eacute; por vezes confundida com hostilidade ou arrog&acirc;ncia. Na verdade, um introvertido que pontua alto na dimens&atilde;o Socializa&ccedil;&atilde;o n&atilde;o procurar&aacute; outras pessoas, mas ser&aacute; bastante agrad&aacute;vel quando abordado.',
	'titulo-realizacao-tipi':'Realiza&ccedil;&atilde;o TIPI',
	'label-conteudo-realizacao-tipi':'A Realiza&ccedil;&atilde;o trata da maneira pela qual n&oacute;s controlamos, regulamos e direcionamos os nossos impulsos. Os impulsos n&atilde;o s&atilde;o inerentemente maus; &agrave;s vezes restri&ccedil;&otilde;es de tempo requerem uma decis&atilde;o precipitada e agir em nosso primeiro impulso pode ser uma resposta eficaz. Al&eacute;m disso, nas horas de distra&ccedil;&atilde;o ao inv&eacute;s de trabalho, atuar de forma espont&acirc;nea e impulsiva pode ser divertido. Indiv&iacute;duos impulsivos podem ser vistos pelos outros como pitorescos, divertidos e palha&ccedil;os. N&atilde;o obstante, agir por impulso pode levar a problemas em uma s&eacute;rie de maneiras. Alguns impulsos s&atilde;o anti-sociais. Atos anti-sociais descontrolados n&atilde;o s&oacute; prejudicam outros membros da sociedade, como tamb&eacute;m podem resultar em puni&ccedil;&atilde;o para o autor de tais atos impulsivos. Outro problema com os atos impulsivos &eacute; que muitas vezes eles produzem recompensas imediatas, mas conseq&uuml;&ecirc;ncias indesej&aacute;veis em longo prazo. Exemplos incluem excesso de Socializa&ccedil;&atilde;o que leva a ser demitido de um emprego, lan&ccedil;ar um insulto que provoca o t&eacute;rmino de um relacionamento importante, ou utilizar drogas indutoras de prazer que, eventualmente, destroem a sa&uacute;de.O comportamento impulsivo, mesmo quando n&atilde;o seriamente destrutivo, diminui a efic&aacute;cia de uma pessoa de maneiras significativas. Agir impulsivamente n&atilde;o permite contemplar cursos alternativos de a&ccedil;&atilde;o, alguns dos quais teriam sido mais s&aacute;bios do que a escolha impulsiva. A impulsividade tamb&eacute;m desvia as pessoas durante projetos que requerem seq&uuml;&ecirc;ncias de etapas ou est&aacute;gios organizados. As realiza&ccedil;&otilde;es de uma pessoa impulsiva s&atilde;o, portanto, pequenas, dispersas e inconsistentes. Uma caracter&iacute;stica da intelig&ecirc;ncia, que potencialmente separa os seres humanos de formas de vida anteriores, &eacute; a capacidade de pensar sobre conseq&uuml;&ecirc;ncias futuras antes de agir por impulso. A atividade inteligente envolve contempla&ccedil;&atilde;o de objetivos de longo alcance, organiza&ccedil;&atilde;o e planejamento de rotas para esses objetivos, e persist&ecirc;ncia nos objetivos apesar dos impulsos de curta dura&ccedil;&atilde;o em contr&aacute;rio. A id&eacute;ia de que a intelig&ecirc;ncia envolve o controle dos impulsos &eacute; bem captada pelo termo prud&ecirc;ncia, um r&oacute;tulo alternativo para o dom&iacute;nio de Realiza&ccedil;&atilde;o. Prudente significa tanto s&aacute;bio quando cauteloso. Pessoas com escores altos na escala de Realiza&ccedil;&atilde;o s&atilde;o, de fato, percebidas pelos outros como inteligentes. Os benef&iacute;cios de alta Realiza&ccedil;&atilde;o s&atilde;o &oacute;bvios. Indiv&iacute;duos realizadores evitam problemas e alcan&ccedil;am altos n&iacute;veis de sucesso atrav&eacute;s de planejamento e persist&ecirc;ncia propositais. Eles tamb&eacute;m s&atilde;o positivamente considerados por outros como inteligentes e confi&aacute;veis. Do lado negativo, eles podem ser perfeccionistas compulsivo e workaholics. Al&eacute;m disso, indiv&iacute;duos extremamente realizadores podem ser considerados enfadonhos e entediantes. Pessoas n&atilde;o-realizadoras podem ser criticadas por sua n&atilde;o-confiabilidade, falta de ambi&ccedil;&atilde;o, e por n&atilde;o ficar dentro das linhas, mas v&atilde;o experimentar muitos prazeres breves e nunca ser&atilde;o chamados de enfadonhos.',
	'titulo-estabilidade-emocional-tipi':'Estabilidade Emocional',
	'label-conteudo-estabilidade-emocional-tipi':'A Estabilidade Emocional &eacute; o grande dom&iacute;nio da personalidade que se encontra no extremo oposto ao tra&ccedil;o de Neuroticismo. Freud originalmente utilizava o termo neurose para descrever uma condi&ccedil;&atilde;o marcada por uma ang&uacute;stia mental, sofrimento emocional e uma incapacidade de lidar eficazmente com as exig&ecirc;ncias normais da vida. Ele sugeriu que todos mostram alguns sinais de neurose, mas que nos diferenciamos em nosso grau de sofrimento e em nossos sintomas espec&iacute;ficos de ang&uacute;stia. Hoje, o Neuroticismo refere-se &agrave; tend&ecirc;ncia a experimentar sentimentos negativos. Os indiv&iacute;duos com altos escores em Estabilidade Emocional ficam menos facilmente chateados e s&atilde;o menos reativos emocionalmente. Eles tendem a ser calmos, emocionalmente est&aacute;veis e livre de sentimentos negativos persistentes. Estar mais livres de sentimentos negativos n&atilde;o significa que pessoas com altos escores experimentem muitos sentimentos positivos; a freq&uuml;&ecirc;ncia de emo&ccedil;&otilde;es positivas &eacute; um componente do dom&iacute;nio Extrovers&atilde;o. Aqueles com escores baixos em Estabilidade Emocional podem experimentar principalmente um sentimento negativo espec&iacute;fico, como ansiedade, raiva ou depress&atilde;o, mas s&atilde;o suscet&iacute;veis a experimentar v&aacute;rias dessas emo&ccedil;&otilde;es. Pessoas com escores baixos nesse dom&iacute;nio s&atilde;o emocionalmente reativas. Elas respondem emocionalmente a eventos que n&atilde;o afetariam a maioria das pessoas, e suas rea&ccedil;&otilde;es tendem a ser mais intensas que o normal. Elas s&atilde;o mais propensas a interpretar situa&ccedil;&otilde;es comuns como amea&ccedil;as, e frustra&ccedil;&otilde;es menores como irremediavelmente dif&iacute;ceis. Suas rea&ccedil;&otilde;es emocionais negativas tendem a persistir por um per&iacute;odo excepcionalmente longo de tempo, o que significa que est&atilde;o frequentemente de mau humor. Esses problemas com regula&ccedil;&atilde;o emocional podem diminuir a capacidade de um neur&oacute;tico de pensar claramente, tomar decis&otilde;es e lidar eficientemente com o estresse.',

	'titulo-abertura-tipi':'Abertura TIPI',
	'label-conteudo-abertura-tipi':'Abertura descreve uma dimens&atilde;o de estilo cognitivo que distingue entre indiv&iacute;duos imaginativos e criativos e aqueles p&eacute;-no-ch&atilde;o, convencionais. Pessoas abertas s&atilde;o intelectualmente curiosas, apreciam a arte e s&atilde;o sens&iacute;veis &agrave; beleza. Eles tendem a ser, comparados &agrave;s pessoas fechadas, mais conscientes de seus sentimentos. Tendem a pensar e agir de forma individualista e n&atilde;o-conformista. Intelectuais normalmente pontuam alto em Abertura; conseq&uuml;entemente, esse fator tamb&eacute;m tem sido chamado de Cultura ou Intelecto. N&atilde;o obstante, o Intelecto &eacute; provavelmente melhor considerado como um aspecto da Abertura. Escores em Abertura s&atilde;o apenas modestamente relacionados com os anos de escolaridade e os escores em testes padr&otilde;es de intelig&ecirc;ncia. Outra caracter&iacute;stica do estilo cognitivo aberto &eacute; uma facilidade para pensar em s&iacute;mbolos e abstra&ccedil;&otilde;es distantes da experi&ecirc;ncia concreta. Dependendo das habilidades intelectuais espec&iacute;ficas do indiv&iacute;duo, essa cogni&ccedil;&atilde;o simb&oacute;lica pode assumir a forma de pensamento matem&aacute;tico, l&oacute;gico ou geom&eacute;trico, uso art&iacute;stico e metaf&oacute;rico da linguagem, composi&ccedil;&atilde;o ou performance musical, ou uma das muitas artes visuais e de performance. Pessoas com baixos escores em Abertura tendem a ter interesses limitados e comuns. Elas preferem o simples, direto e &oacute;bvio ao sutil, complexo e amb&iacute;guo. Podem enxergam as artes e ci&ecirc;ncias com desconfian&ccedil;a, considerando estes esfor&ccedil;os confusos e de nenhum uso pr&aacute;tico. Pessoas fechadas preferem a familiaridade &agrave; novidade, s&atilde;o conservadoras e resistentes &agrave; mudan&ccedil;a. A Abertura &eacute; muitas vezes apresentada como mais saud&aacute;vel ou mais madura por psic&oacute;logos, que s&atilde;o muitas vezes eles mesmos abertos &agrave; experi&ecirc;ncia. No entanto, os estilos aberto e fechado de pensamento s&atilde;o &uacute;teis em ambientes diferentes. O estilo intelectual da pessoa aberta pode servir bem a um professor, mas pesquisas t&ecirc;m demonstrado que o pensamento fechado est&aacute; relacionado a um desempenho superior nos trabalhos de policial, vendas e uma variedade de ocupa&ccedil;&otilde;es de servi&ccedil;o.',
	
	

	'titulo-grafico-tipi':'<b>Resultado TIPI</b>',
	'grafico_cinco_fatores-TIPI':'Grafico TIPI  Download...',
	'div-grandes-fatores-tipi':'<ul data-role="listview"><p><br><li id="list-neo"><a href="#extroversao-tipi"><center><b>Ver Extrovers&atilde;o</b></center></a></li></p><p><br><li id="list-tipi"><a href="#socializacao-tipi"><center><b>Ver Socializa&ccedil;&atilde;o</b></center></a></li></p><p><br><li id="list-neo"><a href="#realizacao-tipi"><center><b>Ver Realiza&ccedil;&atilde;o</b></center></a></li></p><p><br><li id="list-tipi"><a href="#estabilidade-emocional-tipi"><center><b>Ver Estabilidade Emocional</b></center></a></li></p><p><br><li id="list-tipi"><a href="#abertura-tipi"><center><b>Ver Abertura</b></center></a></li></p></ul>',
	
	'titulo-ver-extroversão-neo':'Extrovers&atilde;o NEO',
	'titulo-ver-socializacao-neo':'Socializa&ccedil;&atilde;o NEO',
	
	/*
	'label-disc-total-neo':'<b>Discordo totalmente</b>',
	'label-disc-parci-neo':'<b>Discordo parcialmente</b>',
	'label-nem-disc-nem-cord-neo':'<b>Nem discordo nem concordo</b>',
	'label-conc-parcial-neo':'<b>Concordo parcialmente</b>',
	'label-conc-total-neo':'<b>Concordo totalmente</b>',
	*/
	
	// VER BOTOES DAS PERGUNTAS DO TIPI
	
	'titulo-grafico-neo':'Resultado NEO',
	
	'grafico_cinco_fatores':'Gráfico 1 Download...',
	'label-button-grafico-neo':'Ver os 5 Fatores',
	'grafico_extroversao':'Gráfico 2 Download...',
	'label-button-ver-extroversão-neo':'Ver Extrovers&atilde;o',
	'grafico_socializacao':'Gráfico 3 Download...',
	'label-button-ver-socializacao-neo':'Ver Socializa&ccedil;&atilde;o',
	'grafico_realizacao':'Gráfico 4 Download...',
	'label-button-ver-realizacao-neo':'Ver Realiza&ccedil;&atilde;o',
	'grafico_neuroticismo':'Gráfico 5 Download...',
	'label-button-ver-neuroticismo-neo':'Ver Neuroticismo',
	'grafico_abertura':'Gráfico 6 Download...',
	'label-button-ver-abertura-neo':'Ver Abertura',
	
	'change_language':"<p align=\"center\"><img align=\"middle\" src=\"images/flag_uk.png\" width=\"32\" height=\"32\" id=\"uk\" onClick=\"mudaLingua()\" style=\"vertical-align:middle\"><label style=\"vertical-align:middle\"> EN</label></img></p>",
	
	'nav_home':'<img src="images/Img/icon_home.png" id="home"/>',
	'nav_register':'<img src="images/Img/icon_cadastro.png" id="register"/>',
	'nav_contact':'<img src="images/Img/icon_contato.png" id="contato" />',
	'nav_about':'<img src="images/Img/icon_sobre.png" id="sobre" />',
	'nav_options':'<img src="images/Img/icon_opcoes.png" id="opcoes-instrucao-NEO"/>',
	'nav_exit':'<img src="images/Img/icon_sair.png" id="sair-instrucao-NEO"/>',
	'nav_continue':'<img src="images/Img/icon_continuar.png" id="continuar-instrucao-NEO"/>'//,
	
	/*
	'change_language':'<p align="center"><img align="middle" src="images/flag_uk.png" width="32" height="32" id="uk" onClick="inicializeLanguage(\'en\')" style="vertical-align:middle"><label style="vertical-align:middle"> EN</label></img></p>'/*,
	
	'':'',
	'':'',
	*/
	
	
	
	
	
	

}







function inicializeLanguage(language) {
	this.lang=language;
	if(language == "en"){
		$.i18n.setDictionary(en_dict);
		alert("Entrou ingles");
	}else{
		$.i18n.setDictionary(pt_dict);
		alert("Entrou portugues");
	}
	
	document.getElementById("label-email-inicio").innerHTML = $.i18n._('Email');	
	document.getElementById("label-senha-inicio-pt").innerHTML = $.i18n._('Password');
	document.getElementById("button-login").innerHTML = $.i18n._('Login');
	document.getElementById("esqueceu-senha").innerHTML = $.i18n._('ForgotPass');
	document.getElementById("titulo-recuperar").innerHTML = $.i18n._('Recuperar');
	document.getElementById("label-email").innerHTML = $.i18n._('Email');
	document.getElementById("label-button-recuperar").innerHTML = $.i18n._('Recovery');
	document.getElementById("titulo-instrucao-NEO").innerHTML = $.i18n._('TitleNEOIPIP_instructions');
	document.getElementById("conteudo-instrucao-NEO").innerHTML = $.i18n._('conteudo-instrucao-NEO');
	document.getElementById("titulo-instrucao-TIPI").innerHTML = $.i18n._('titulo-instrucao-TIPI');
	document.getElementById("conteudo-instrucao-TIPI").innerHTML = $.i18n._('conteudo-instrucao-TIPI');
	
	document.getElementById("titulo-instrucao-cadastro").innerHTML = $.i18n._('titulo-instrucao-cadastro');
	document.getElementById("nome-cadastro").innerHTML = $.i18n._('nome-cadastro');
	document.getElementById("email-cadastro").innerHTML = $.i18n._('Email');
	document.getElementById("senha-cadastro").innerHTML = $.i18n._('Password');
	document.getElementById("re_senha-cadastro").innerHTML = $.i18n._('re_senha-cadastro');
	document.getElementById("sexo-cadastro").innerHTML = $.i18n._('sexo-cadastro');
	// ver traduçao dos options Masculino e Feminino

	document.getElementById("idade-cadastro").innerHTML = $.i18n._('idade-cadastro');
	document.getElementById("idioma-cadastro").innerHTML = $.i18n._('idioma-cadastro');
	
	document.getElementById("texto-politica").innerHTML = $.i18n._('texto-politica');
	document.getElementById("politica").innerHTML = $.i18n._('politica');
	document.getElementById("aceita-cadastro").innerHTML = $.i18n._('aceita-cadastro');
	document.getElementById("label-button-cadastrar").innerHTML = $.i18n._('label-button-cadastrar');
	document.getElementById("titulo-contato").innerHTML = $.i18n._('titulo-contato');
	document.getElementById("titulo-conteudo-contato").innerHTML = $.i18n._('titulo-conteudo-contato');
	document.getElementById("titulo-sobre").innerHTML = $.i18n._('titulo-sobre');
	document.getElementById("texto-conteudo-sobre").innerHTML = $.i18n._('texto-conteudo-sobre');
	document.getElementById("sobre-inventario").innerHTML = $.i18n._('sobre-inventario');
	document.getElementById("ipip").innerHTML = $.i18n._('ipip');
	document.getElementById("tipi").innerHTML = $.i18n._('tipi');
	document.getElementById("titulo-ipip").innerHTML = $.i18n._('titulo-ipip');
	document.getElementById("texto-conteudo-ipip").innerHTML = $.i18n._('texto-conteudo-ipip');
	document.getElementById("titulo-tipi").innerHTML = $.i18n._('titulo-tipi');
	document.getElementById("texto-conteudo-tipi").innerHTML = $.i18n._('texto-conteudo-tipi');
	document.getElementById("texto-conteudo-escolha").innerHTML = $.i18n._('texto-conteudo-escolha');
	document.getElementById("titulo-opcoes").innerHTML = $.i18n._('titulo-opcoes');
	document.getElementById("label-senha-opcoes").innerHTML = $.i18n._('label-senha-opcoes');
	document.getElementById("label-novasenha-opcoes").innerHTML = $.i18n._('label-novasenha-opcoes');
	document.getElementById("label-button-alterar").innerHTML = $.i18n._('label-button-alterar');
	document.getElementById("label-button-voltar-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("label-button-voltar-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-saudacao-neo").innerHTML = $.i18n._('titulo-saudacao-neo');
	document.getElementById("texto-conteudo-saudacao-neo").innerHTML = $.i18n._('texto-conteudo-saudacao-neo');
	document.getElementById("label-button-saudacao-neo").innerHTML = $.i18n._('label-button-saudacao-neo');
	document.getElementById("titulo-saudacao-tipi").innerHTML = $.i18n._('titulo-saudacao-tipi');
	document.getElementById("texto-conteudo-saudacao-tipi").innerHTML = $.i18n._('texto-conteudo-saudacao-tipi');
	document.getElementById("label-button-saudacao-tipi").innerHTML = $.i18n._('label-button-saudacao-tipi');
	document.getElementById("orientadora").innerHTML = $.i18n._('orientadora');
	document.getElementById("christiano").innerHTML = $.i18n._('christiano');
	document.getElementById("igor").innerHTML = $.i18n._('igor');
	
	document.getElementById("railan").innerHTML = $.i18n._('railan');
	document.getElementById("label-conteudo-extroversão").innerHTML = $.i18n._('label-conteudo-extroversão');
	document.getElementById("label-conteudo-socializacao").innerHTML = $.i18n._('label-conteudo-socializacao');
	document.getElementById("label-button-voltar-realizacao-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-ver-realizacao-neo").innerHTML = $.i18n._('titulo-ver-realizacao-neo');
	document.getElementById("label-conteudo-realizacao").innerHTML = $.i18n._('label-conteudo-realizacao');
	document.getElementById("label-button-voltar-neuroticismo-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-ver-neuroticismo-neo").innerHTML = $.i18n._('titulo-ver-neuroticismo-neo');
	document.getElementById("label-conteudo-neuroticismo").innerHTML = $.i18n._('label-conteudo-neuroticismo');
	document.getElementById("label-button-voltar-abertura-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-ver-abertura-neo").innerHTML = $.i18n._('titulo-ver-abertura-neo');
	document.getElementById("label-conteudo-abertura").innerHTML = $.i18n._('label-conteudo-abertura');
	document.getElementById("label-button-voltar-extroversao-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-extroversão-tipi").innerHTML = $.i18n._('titulo-extroversão-tipi');
	document.getElementById("label-conteudo-extroversao-tipi").innerHTML = $.i18n._('label-conteudo-extroversao-tipi');
	document.getElementById("label-button-voltar-socializacao-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-socializacao-tipi").innerHTML = $.i18n._('titulo-socializacao-tipi');
	document.getElementById("label-conteudo-socializacao-tipi").innerHTML = $.i18n._('label-conteudo-socializacao-tipi');
	document.getElementById("label-button-voltar-realizacao-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-realizacao-tipi").innerHTML = $.i18n._('titulo-realizacao-tipi');
	document.getElementById("label-conteudo-realizacao-tipi").innerHTML = $.i18n._('label-conteudo-realizacao-tipi');
	document.getElementById("label-button-voltar-estabilidade-emocional-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-estabilidade-emocional-tipi").innerHTML = $.i18n._('titulo-estabilidade-emocional-tipi');
	document.getElementById("label-conteudo-estabilidade-emocional-tipi").innerHTML = $.i18n._('label-conteudo-estabilidade-emocional-tipi');
	document.getElementById("label-button-voltar-abertura-tipi").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-abertura-tipi").innerHTML = $.i18n._('titulo-abertura-tipi');
	document.getElementById("label-conteudo-abertura-tipi").innerHTML = $.i18n._('label-conteudo-abertura-tipi');
	
	document.getElementById("escolha-de-idioma").innerHTML = $.i18n._('escolha-de-idioma');
	document.getElementById("escolha-sexo").innerHTML = $.i18n._('escolha-sexo');
	
	document.getElementById("titulo-grafico-tipi").innerHTML = $.i18n._('titulo-grafico-tipi');
	document.getElementById("grafico_cinco_fatores-TIPI").innerHTML = $.i18n._('grafico_cinco_fatores-TIPI');
	document.getElementById("div-grandes-fatores-tipi").innerHTML = $.i18n._('div-grandes-fatores-tipi');
	
	document.getElementById("label-button-voltar-extroversão-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-ver-extroversão-neo").innerHTML = $.i18n._('titulo-ver-extroversão-neo');
	document.getElementById("label-conteudo-extroversão").innerHTML = $.i18n._('label-conteudo-extroversão');
	document.getElementById("label-button-voltar-socializacao-neo").innerHTML = $.i18n._('Voltar');
	document.getElementById("titulo-ver-socializacao-neo").innerHTML = $.i18n._('titulo-ver-socializacao-neo');
	document.getElementById("label-conteudo-socializacao").innerHTML = $.i18n._('label-conteudo-socializacao');
	//document.getElementById("label-disc-total-neo").innerHTML = $.i18n._('label-disc-total-neo');
	//document.getElementById("label-disc-parci-neo").innerHTML = $.i18n._('label-disc-parci-neo');
	//document.getElementById("label-nem-disc-nem-cord-neo").innerHTML = $.i18n._('label-nem-disc-nem-cord-neo');
	//document.getElementById("label-conc-parcial-neo").innerHTML = $.i18n._('label-conc-parcial-neo');
	//document.getElementById("label-conc-total-neo").innerHTML = $.i18n._('label-conc-total-neo');
	document.getElementById("titulo-grafico-neo").innerHTML = $.i18n._('titulo-grafico-neo');
	document.getElementById("grafico_cinco_fatores").innerHTML = $.i18n._('grafico_cinco_fatores');
	document.getElementById("label-button-grafico-neo").innerHTML = $.i18n._('label-button-grafico-neo');
	document.getElementById("grafico_extroversao").innerHTML = $.i18n._('grafico_extroversao');
	document.getElementById("label-button-ver-extroversão-neo").innerHTML = $.i18n._('label-button-ver-extroversão-neo');
	document.getElementById("grafico_socializacao").innerHTML = $.i18n._('grafico_socializacao');
	document.getElementById("label-button-ver-socializacao-neo").innerHTML = $.i18n._('label-button-ver-socializacao-neo');
	document.getElementById("grafico_realizacao").innerHTML = $.i18n._('grafico_realizacao');
	document.getElementById("label-button-ver-realizacao-neo").innerHTML = $.i18n._('label-button-ver-realizacao-neo');
	document.getElementById("grafico_neuroticismo").innerHTML = $.i18n._('grafico_neuroticismo');
	document.getElementById("label-button-ver-neuroticismo-neo").innerHTML = $.i18n._('label-button-ver-neuroticismo-neo');
	document.getElementById("grafico_abertura").innerHTML = $.i18n._('grafico_abertura');
	document.getElementById("label-button-ver-abertura-neo").innerHTML = $.i18n._('label-button-ver-abertura-neo');
	document.getElementById("change_language").innerHTML = $.i18n._('change_language');
	document.getElementById("change_language2").innerHTML = $.i18n._('change_language');
	document.getElementById("change_language3").innerHTML = $.i18n._('change_language');
	document.getElementById("change_language4").innerHTML = $.i18n._('change_language');
	document.getElementById("change_language5").innerHTML = $.i18n._('change_language');

	document.getElementById("nav_home").innerHTML = $.i18n._('nav_home');
	document.getElementById("nav_register").innerHTML = $.i18n._('nav_register');
	document.getElementById("nav_contact").innerHTML = $.i18n._('nav_contact');
	document.getElementById("nav_about").innerHTML = $.i18n._('nav_about');
	document.getElementById("nav_options").innerHTML = $.i18n._('nav_options');
	document.getElementById("nav_exit").innerHTML = $.i18n._('nav_exit');
	document.getElementById("nav_continue").innerHTML = $.i18n._('nav_continue');
	//document.getElementById("").innerHTML = $.i18n._('');

	
}

/*
 *********** Questoes ***********
 */
var questoesNEO =  new Array (301);

    questoesNEO[1] =  "Me preocupo com as coisas.";
    questoesNEO[2] =  "Faço amigos facilmente.";
    questoesNEO[3] =  "Tenho uma imaginação vívida.";
    questoesNEO[4] =  "Confio nos outros.";
    questoesNEO[5] =  "Completo tarefas com sucesso.";
    questoesNEO[6] =  "Fico com raiva facilmente.";
    questoesNEO[7] =  "Adoro festas com muitas pessoas.";
    questoesNEO[8] =  "Acredito na importância da arte.";
    questoesNEO[9] =  "Nunca sonegaria impostos.";
    questoesNEO[10] =  "Gosto de ordem.";
    questoesNEO[11] =  "Frequentemente me sinto triste.";
    questoesNEO[12] =  "Assumo o comando das situações.";
    questoesNEO[13] =  "Vivo minhas emoções intensamente.";
    questoesNEO[14] =  "Faço as pessoas se sentirem queridas.";
    questoesNEO[15] =  "Tento obedecer às regras.";
    questoesNEO[16] =  "Sou intimidado(a) facilmente.";
    questoesNEO[17] =  "Estou sempre ocupado(a).";
    questoesNEO[18] =  "Prefiro variedade à rotina.";
    questoesNEO[19] =  "Sou fácil de satisfazer.";
    questoesNEO[20] =  "Vou direto ao objetivo.";
    questoesNEO[21] =  "Frequentemente como demasiadamente.";
    questoesNEO[22] =  "Adoro adrenalina.";
    questoesNEO[23] =  "Gosto de solucionar problemas complexos.";
    questoesNEO[24] =  "Detesto ser o centro das atenções.";
    questoesNEO[25] =  "Faço minhas tarefas o mais rápido possível.";
    questoesNEO[26] =  "Entro em pânico com facilidade.";
    questoesNEO[27] =  "Irradio alegria.";
    questoesNEO[28] =  "Tendo a votar em políticos de esquerda.";
    questoesNEO[29] =  "Tenho compaixão pelos desabrigados.";
    questoesNEO[30] =  "Evito cometer erros.";
    questoesNEO[31] =  "Tenho medo do pior.";
    questoesNEO[32] =  "Me aproximo das pessoas com facilidade.";
    questoesNEO[33] =  "Curto altos vôos na minha imaginação.";
    questoesNEO[34] =  "Acredito que os outros têm boas intenções.";
    questoesNEO[35] =  "Sobressaio nas coisas que faço.";
    questoesNEO[36] =  "Me irrito facilmente.";
    questoesNEO[37] =  "Converso com diversas pessoas em festas.";
    questoesNEO[38] =  "Gosto de música.";
    questoesNEO[39] =  "Sigo as regras.";
    questoesNEO[40] =  "Gosto de arrumar as coisas.";
    questoesNEO[41] =  "Não gosto de mim mesmo(a).";
    questoesNEO[42] =  "Tento liderar os outros.";
    questoesNEO[43] =  "Sinto as emoções dos outros.";
    questoesNEO[44] =  "Antecipo as necessidades dos outros.";
    questoesNEO[45] =  "Mantenho as minhas promessas.";
    questoesNEO[46] =  "Tenho medo de fazer a coisa errada.";
    questoesNEO[47] =  "Estou sempre ativo(a).";
    questoesNEO[48] =  "Gosto de conhecer lugares novos.";
    questoesNEO[49] =  "Não suporto confrontos.";
    questoesNEO[50] =  "Trabalho duro.";
    questoesNEO[51] =  "Não sei porque faço algumas das coisas que faço.";
    questoesNEO[52] =  "Busco aventura.";
    questoesNEO[53] =  "Adoro ler coisas que me desafiam.";
    questoesNEO[54] =  "Não gosto de falar sobre mim mesmo(a).";
    questoesNEO[55] =  "Estou sempre preparado(a).";
    questoesNEO[56] =  "Muitas vezes me sinto sobrecarregado(a).";
    questoesNEO[57] =  "Divirto-me bastante.";
    questoesNEO[58] =  "Acredito que não existe verdade absoluta.";
    questoesNEO[59] =  "Sinto compaixão por aqueles menos abastados que eu.";
    questoesNEO[60] =  "Escolho minhas palavras com cuidado.";
    questoesNEO[61] =  "Tenho medo de muitas coisas.";
    questoesNEO[62] =  "Me sinto à vontade perto de pessoas.";
    questoesNEO[63] =  "Amo sonhar acordado(a).";
    questoesNEO[64] =  "Confio no que as pessoas falam.";
    questoesNEO[65] =  "Lido com minhas tarefas tranquilamente.";
    questoesNEO[66] =  "Aborreço-me facilmente.";
    questoesNEO[67] =  "Gosto de fazer parte de um grupo.";
    questoesNEO[68] =  "Vejo beleza em coisas que outros podem não notar.";
    questoesNEO[69] =  "Uso de bajulação para avançar.";
    questoesNEO[70] =  "Quero que tudo esteja perfeito.";
    questoesNEO[71] =  "Frequentemente me sinto um lixo.";
    questoesNEO[72] =  "Convenço pessoas a agirem.";
    questoesNEO[73] =  "Sou apaixonado(a) por causas.";
    questoesNEO[74] =  "Adoro ajudar o próximo.";
    questoesNEO[75] =  "Pago minhas contas em dia.";
    questoesNEO[76] =  "Tenho dificuldade de me aproximar das pessoas.";
    questoesNEO[77] =  "Faço diversas coisas no meu tempo livre.";
    questoesNEO[78] =  "Me interesso por muitas coisas.";
    questoesNEO[79] =  "Odeio parecer muito controlador ou exigente.";
    questoesNEO[80] =  "Transformo planos em ações.";
    questoesNEO[81] =  "Faço coisas de que me arrependo posteriormente.";
    questoesNEO[82] =  "Adoro ação.";
    questoesNEO[83] =  "Tenho um vocabulário rico.";
    questoesNEO[84] =  "Me considero uma pessoa comum.";
    questoesNEO[85] =  "Inicio meus trabalhos o mais rápido possível.";
    questoesNEO[86] =  "Sinto que sou incapaz de lidar com as situações.";
    questoesNEO[87] =  "Expresso alegria como uma criança.";
    questoesNEO[88] =  "Acredito que criminosos deveriam receber ajuda ao invés de punição.";
    questoesNEO[89] =  "Valorizo mais cooperação do que competição.";
    questoesNEO[90] =  "Sigo no caminho que escolho.";
    questoesNEO[91] =  "Me estresso facilmente.";
    questoesNEO[92] =  "Ajo confortavelmente perto de outras pessoas.";
    questoesNEO[93] =  "Gosto de me perder nos meus pensamentos.";
    questoesNEO[94] =  "Acredito que as pessoas são essencialmente boas.";
    questoesNEO[95] =  "Sei da minha capacidade.";
    questoesNEO[96] =  "Estou frequentemente de mau humor.";
    questoesNEO[97] =  "Envolvo outras pessoas no que estou fazendo.";
    questoesNEO[98] =  "Amo flores.";
    questoesNEO[99] =  "Uso outras pessoas para conseguir os meus objetivos.";
    questoesNEO[100] =  "Gosto de ordem e harmonia.";
    questoesNEO[101] =  "Tenho uma opinião ruim sobre mim mesmo(a).";
    questoesNEO[102] =  "Procuro influenciar outros.";
    questoesNEO[103] =  "Gosto de analisar a mim mesmo(a) e à minha vida.";
    questoesNEO[104] =  "Me preocupo com os outros.";
    questoesNEO[105] =  "Falo a verdade.";
    questoesNEO[106] =  "Tenho medo de chamar atenção.";
    questoesNEO[107] =  "Consigo fazer muitas coisas ao mesmo tempo.";
    questoesNEO[108] =  "Gosto de iniciar coisas novas.";
    questoesNEO[109] =  "Tenho uma língua afiada.";
    questoesNEO[110] =  "Mergulho de coração nas minhas tarefas.";
    questoesNEO[111] =  "Gosto de farras.";
    questoesNEO[112] =  "Gosto de fazer parte de multidões barulhentas.";
    questoesNEO[113] =  "Consigo lidar com muitas informações.";
    questoesNEO[114] =  "Raramente conto vantagem.";
    questoesNEO[115] =  "Começo logo a trabalhar.";
    questoesNEO[116] =  "Não consigo me decidir.";
    questoesNEO[117] =  "Estou sempre de bem com a vida.";
    questoesNEO[118] =  "Acredito numa única religião verdadeira.";
    questoesNEO[119] =  "Sofro com as perdas dos outros.";
    questoesNEO[120] =  "Faço coisas sem pensar.";
    questoesNEO[121] =  "Sou consumido pelos meus problemas.";
    questoesNEO[122] =  "Faço as pessoas se alegrarem.";
    questoesNEO[123] =  "Entrego-me às minhas fantasias.";
    questoesNEO[124] =  "Acredito na bondade do ser humano.";
    questoesNEO[125] =  "Tenho boas ideias para solucionar problemas.";
    questoesNEO[126] =  "Perco a calma.";
    questoesNEO[127] =  "Adoro festas surpresas.";
    questoesNEO[128] =  "Aprecio a beleza da natureza.";
    questoesNEO[129] =  "Sei burlar as regras.";
    questoesNEO[130] =  "Faço coisas de acordo com um plano.";
    questoesNEO[131] =  "Tenho constantes variações de humor.";
    questoesNEO[132] =  "Assumo o controle das situações.";
    questoesNEO[133] =  "Tento me entender.";
    questoesNEO[134] =  "Tenho sempre uma palavra de conforto pra alguém.";
    questoesNEO[135] =  "Escuto a minha consciência.";
    questoesNEO[136] =  "Me sinto à vontade somente com os meus amigos.";
    questoesNEO[137] =  "Reajo rapidamente.";
    questoesNEO[138] =  "Prefiro lidar com coisas que eu já conheço.";
    questoesNEO[139] =  "Contradigo os outros.";
    questoesNEO[140] =  "Faço mais do que esperam de mim.";
    questoesNEO[141] =  "Adoro comer.";
    questoesNEO[142] =  "Gosto de correr riscos.";
    questoesNEO[143] =  "Gosto de pensar.";
    questoesNEO[144] =  "Acredito que sou melhor que os outros.";
    questoesNEO[145] =  "Ponho os meus planos em prática.";
    questoesNEO[146] =  "Emoções tomam conta de mim.";
    questoesNEO[147] =  "Amo a vida.";
    questoesNEO[148] =  "Tendo a votar em candidatos de direita.";
    questoesNEO[149] =  "Não me importo com os problemas dos outros.";
    questoesNEO[150] =  "Tomo decisões precipitadas.";
    questoesNEO[151] =  "Não sou facilmente incomodado(a).";
    questoesNEO[152] =  "Sou uma pessoa difícil de se conhecer.";
    questoesNEO[153] =  "Gasto tempo para refletir sobre as coisas.";
    questoesNEO[154] =  "Acredito que tudo vai ficar bem.";
    questoesNEO[155] =  "Eu sei como conseguir as coisas.";
    questoesNEO[156] =  "Raramente fico irritado(a).";
    questoesNEO[157] =  "Prefiro ficar sozinho(a).";
    questoesNEO[158] =  "Não gosto de arte.";
    questoesNEO[159] =  "Trapaceio para chegar onde quero.";
    questoesNEO[160] =  "Frequentemente me esqueço de colocar as coisas de volta onde encontrei.";
    questoesNEO[161] =  "Me desespero.";
    questoesNEO[162] =  "Espero que outros tomem a liderança.";
    questoesNEO[163] =  "Raramente me emociono.";
    questoesNEO[164] =  "Olho os outros com desprezo.";
    questoesNEO[165] =  "Quebro as regras.";
    questoesNEO[166] =  "Tropeço nas minhas palavras.";
    questoesNEO[167] =  "Gosto de levar uma vida tranquila.";
    questoesNEO[168] =  "Não gosto de mudanças.";
    questoesNEO[169] =  "Adoro uma boa briga.";
    questoesNEO[170] =  "Eu sou exigente comigo mesmo(a) e com os outros.";
    questoesNEO[171] =  "Raramente excedo-me.";
    questoesNEO[172] =  "Ajo loucamente, com ousadia.";
    questoesNEO[173] =  "Não me interesso por coisas abstratas.";
    questoesNEO[174] =  "Tenho uma opinião positiva ao meu respeito.";
    questoesNEO[175] =  "Não gosto de trabalhar.";
    questoesNEO[176] =  "Mantenho a calma quando estou sobre pressão.";
    questoesNEO[177] =  "Olho pelo lado bom da vida.";
    questoesNEO[178] =  "Acho que os artistas recebem muito apoio financeiro do governo desnecessariamente.";
    questoesNEO[179] =  "Não gosto de pessoas bondosas.";
    questoesNEO[180] =  "Eu ajo por impulso.";
    questoesNEO[181] =  "Na maior parte do tempo sou calmo(a).";
    questoesNEO[182] =  "Não me sinto à vontade perto de outras pessoas.";
    questoesNEO[183] =  "Raramente sonho acordado(a).";
    questoesNEO[184] =  "Desconfio dos outros.";
    questoesNEO[185] =  "Costumo fazer maus julgamentos das situações.";
    questoesNEO[186] =  "Raramente fico zangado(a).";
    questoesNEO[187] =  "Prefiro que me deixem só.";
    questoesNEO[188] =  "Não gosto de poesia.";
    questoesNEO[189] =  "Pressiono as pessoas.";
    questoesNEO[190] =  "Deixo o meu quarto bagunçado.";
    questoesNEO[191] =  "Sinto que a minha vida está sem rumo.";
    questoesNEO[192] =  "Me coloco em segundo plano.";
    questoesNEO[193] =  "Não me deixo afetar pelas minhas emoções.";
    questoesNEO[194] =  "Sou indiferente aos sentimentos dos outros.";
    questoesNEO[195] =  "Quebro as minhas promessas.";
    questoesNEO[196] =  "Não me envergonho facilmente.";
    questoesNEO[197] =  "Gosto de fazer as coisas com calma.";
    questoesNEO[198] =  "Não gosto de mudanças.";
    questoesNEO[199] =  "Grito com os outros.";
    questoesNEO[200] =  "Exijo qualidade.";
    questoesNEO[201] =  "Resisto às tentações com facilidade.";
    questoesNEO[202] =  "Estou aberto(a) a novas experiências.";
    questoesNEO[203] =  "Evito discussões filosóficas.";
    questoesNEO[204] =  "Tenho um ótimo conceito sobre mim mesmo(a).";
    questoesNEO[205] =  "Desperdiço o meu tempo.";
    questoesNEO[206] =  "Sei lidar com problemas complexos.";
    questoesNEO[207] =  "Dou gargalhadas.";
    questoesNEO[208] =  "Acredito que as leis deveriam ser rigorosamente aplicadas.";
    questoesNEO[209] =  "Acredito em olho por olho, dente por dente.";
    questoesNEO[210] =  "Costumo me precipitar.";
    questoesNEO[211] =  "Não me transtorno facilmente com os problemas.";
    questoesNEO[212] =  "Evito contato com outros.";
    questoesNEO[213] =  "Não tenho uma boa imaginação.";
    questoesNEO[214] =  "Suspeito das intenções dos outros.";
    questoesNEO[215] =  "Não tenho uma boa compreensão das coisas.";
    questoesNEO[216] =  "Não me incomodo facilmente.";
    questoesNEO[217] =  "Não gosto de multidão.";
    questoesNEO[218] =  "Não curto visitar museus de arte.";
    questoesNEO[219] =  "Finjo me importar com os outros.";
    questoesNEO[220] =  "Costumo deixar os meus pertences em todo lugar.";
    questoesNEO[221] =  "Raramente me sinto pra baixo.";
    questoesNEO[222] =  "Tenho pouco a dizer.";
    questoesNEO[223] =  "Raramente percebo as minhas reações emocionais.";
    questoesNEO[224] =  "Costumo fazer as pessoas se sentirem desconfortáveis.";
    questoesNEO[225] =  "Convenço as pessoas a fazerem as minhas obrigações.";
    questoesNEO[226] =  "Consigo lidar bem com novas situações.";
    questoesNEO[227] =  "Gosto de um estilo de vida tranquilo.";
    questoesNEO[228] =  "Gosto de rotina.";
    questoesNEO[229] =  "Insulto os outros.";
    questoesNEO[230] =  "Não tenho motivação para o sucesso.";
    questoesNEO[231] =  "Consigo controlar as minhas vontades.";
    questoesNEO[232] =  "Procuro perigo.";
    questoesNEO[233] =  "Tenho dificuldade em entender ideias abstratas.";
    questoesNEO[234] =  "Sei as respostas para muitas perguntas.";
    questoesNEO[235] =  "Necessito de um empurrão para começar algo.";
    questoesNEO[236] =  "Sei como superar situações difíceis.";
    questoesNEO[237] =  "Divirto os meus amigos.";
    questoesNEO[238] =  "Acredito que tratamos os criminosos com muitas regalias.";
    questoesNEO[239] =  "Tento não pensar nos necessitados.";
    questoesNEO[240] =  "Faço coisas malucas.";
    questoesNEO[241] =  "Não me preocupo com coisas que já aconteceram.";
    questoesNEO[242] =  "Não me interesso sinceramente pelos outros.";
    questoesNEO[243] =  "Raramente me perco nos meus pensamentos.";
    questoesNEO[244] =  "Sou cauteloso(a) com relação aos outros.";
    questoesNEO[245] =  "Tenho pouco a contribuir.";
    questoesNEO[246] =  "Não perco a cabeça.";
    questoesNEO[247] =  "Evito multidões.";
    questoesNEO[248] =  "Não gosto de ir a shows.";
    questoesNEO[249] =  "Tiro vantagem dos outros.";
    questoesNEO[250] =  "Não me incomodo com pessoas bagunceiras.";
    questoesNEO[251] =  "Estou satisfeito(a) comigo mesmo(a).";
    questoesNEO[252] =  "Não gosto de chamar atenção.";
    questoesNEO[253] =  "Raramente passo por altos e baixos emocionais.";
    questoesNEO[254] =  "Viro as costas para os outros.";
    questoesNEO[255] =  "Faço o oposto daquilo que me foi pedido.";
    questoesNEO[256] =  "Não me incomodo com situações embaraçosas.";
    questoesNEO[257] =  "Deixo as coisas acontecerem no seu ritmo natural.";
    questoesNEO[258] =  "Não gosto de experimentar comidas novas.";
    questoesNEO[259] =  "Me vingo dos outros.";
    questoesNEO[260] =  "Faço apenas o necessário.";
    questoesNEO[261] =  "Nunca gasto mais do que eu posso.";
    questoesNEO[262] =  "Nunca voaria de asa delta ou faria bungee jumping.";
    questoesNEO[263] =  "Não me interesso por discussões teóricas.";
    questoesNEO[264] =  "Me gabo sobre as minhas qualidades.";
    questoesNEO[265] =  "Tenho dificuldade em iniciar tarefas.";
    questoesNEO[266] =  "Prontamente supero qualquer contratempo.";
    questoesNEO[267] =  "Não me divirto facilmente.";
    questoesNEO[268] =  "Deveríamos ser mais duros com o crime.";
    questoesNEO[269] =  "Acredito que as pessoas deveriam cuidar de si mesmas.";
    questoesNEO[270] =  "Ajo sem pensar.";
    questoesNEO[271] =  "Me adapto facilmente a novas situações.";
    questoesNEO[272] =  "Mantenho os outros à distância.";
    questoesNEO[273] =  "Tenho dificuldade em imaginar coisas.";
    questoesNEO[274] =  "Acredito que as pessoas são essencialmente más.";
    questoesNEO[275] =  "Não vejo as consequências das coisas.";
    questoesNEO[276] =  "Raramente reclamo.";
    questoesNEO[277] =  "Busco tranquilidade.";
    questoesNEO[278] =  "Não gosto de assistir a performances de dança.";
    questoesNEO[279] =  "Atrapalho os planos dos outros.";
    questoesNEO[280] =  "Não me incomodo com a desordem.";
    questoesNEO[280] =  "Não me incomodo com a disordem.";
    questoesNEO[281] =  "Estou muito satisfeito(a) comigo mesmo(a).";
    questoesNEO[282] =  "Não expresso a minha opinião.";
    questoesNEO[283] =  "Não entendo por que as pessoas se emocionam.";
    questoesNEO[284] =  "Nunca reservo um tempo para os outros.";
    questoesNEO[285] =  "Distorço os fatos.";
    questoesNEO[286] =  "Estou apto(a) a defender meus princípios.";
    questoesNEO[287] =  "Tenho um poder de reação lento.";
    questoesNEO[288] =  "Estou preso(a) a tradições.";
    questoesNEO[289] =  "Guardo rancor.";
    questoesNEO[290] =  "Dedico pouco tempo e esforço ao meu trabalho.";
    questoesNEO[291] =  "Nunca esbanjo.";
    questoesNEO[292] =  "Não gosto de música alta.";
    questoesNEO[293] =  "Evito ler coisas difíceis.";
    questoesNEO[294] =  "Me coloco no centro das atenções.";
    questoesNEO[295] =  "Adio as minhas decisões.";
    questoesNEO[296] =  "Mantenho a calma mesmo em situações tensas.";
    questoesNEO[297] =  "Raramente faço brincadeiras.";
    questoesNEO[298] =  "Prefiro de ficar em pé durante o Hino Nacional.";
    questoesNEO[299] =  "Não suporto pessoas fracas.";
    questoesNEO[300] =  "Frequentemente faço planos de última hora.";

	
var questoesTIPI =  new Array (11);

questoesTIPI[1] = "Extrovertida, entusiasta.";
questoesTIPI[2] = "Crítica, conflituosa.";
questoesTIPI[3] = "De confiança, com auto-disciplina.";
questoesTIPI[4] = "Ansiosa, que se chateia/aborrece facilmente.";
questoesTIPI[5] = "Aberta a experiências novas, complexa/difícil/complicada.";
questoesTIPI[6] = "Reservada, calada.";
questoesTIPI[7] = "Compreensiva/solidária, afetuosa.";
questoesTIPI[8] = "Desorganizada, descuidada.";
questoesTIPI[9] = "Calma, emocionalmente estável.";
questoesTIPI[10] = "Convencional, pouco criativa.";
	
var questoes_us =  new Array (301);
	questoes_us[1] = "Worries about things.";
	questoes_us[2] = "Makes friends easily.";
	questoes_us[3] = "Has a vivid imagination.";
	questoes_us[4] = "Trusts others.";
	questoes_us[5] = "Completes tasks successfully.";
	questoes_us[6] = "Gets angry easily.";
	questoes_us[7] = "Loves large parties.";
	questoes_us[8] = "Believes in the importance of art.";
	questoes_us[9] = "Would never cheat on his/her taxes.";
	questoes_us[10] = "Likes order.";
	questoes_us[11] = "Often feels blue.";
	questoes_us[12] = "Takes charge.";
	questoes_us[13] = "Experiences his/her emotions intensely.";
	questoes_us[14] = "Makes people feel welcome.";
	questoes_us[15] = "Tries to follow the rules.";
	questoes_us[16] = "Is easily intimidated.";
	questoes_us[17] = "Is always busy.";
	questoes_us[18] = "Prefers variety to routine.";
	questoes_us[19] = "Is easy to satisfy.";
	questoes_us[20] = "Goes straight for the goal.";
	questoes_us[21] = "Often eats too much.";
	questoes_us[22] = "Loves excitement.";
	questoes_us[23] = "Likes to solve complex problems.";
	questoes_us[24] = "Dislikes being the center of attention.";
	questoes_us[25] = "Gets chores done right away.";
	questoes_us[26] = "Panics easily.";
	questoes_us[27] = "Radiates joy.";
	questoes_us[28] = "Tends to vote for liberal political candidates.";
	questoes_us[29] = "Sympathizes with the homeless.";
	questoes_us[30] = "Avoids mistakes.";
	questoes_us[31] = "Fears for the worst.";
	questoes_us[32] = "Warms up quickly to others.";
	questoes_us[33] = "Enjoys wild flights of fantasy.";
	questoes_us[34] = "Believes that others have good intentions.";
	questoes_us[35] = "Excels in what he/she does.";
	questoes_us[36] = "Gets irritated easily.";
	questoes_us[37] = "Talks to a lot of different people at parties.";
	questoes_us[38] = "Likes music.";
	questoes_us[39] = "Sticks to the rules.";
	questoes_us[40] = "Likes to tidy up.";
	questoes_us[41] = "Dislikes him/herself.";
	questoes_us[42] = "Tries to lead others.";
	questoes_us[43] = "Feels others' emotions.";
	questoes_us[44] = "Anticipates the needs of others.";
	questoes_us[45] = "Keeps his/her promises.";
	questoes_us[46] = "Is afraid that he/she will do the wrong thing.";
	questoes_us[47] = "Is always on the go.";
	questoes_us[48] = "Likes to visit new places.";
	questoes_us[49] = "Can't stand confrontations.";
	questoes_us[50] = "Works hard.";
	questoes_us[51] = "Doesn't know why he/she does some of the things he/she does.";
	questoes_us[52] = "Seeks adventure.";
	questoes_us[53] = "Loves to read challenging material.";
	questoes_us[54] = "Dislikes talking about him/herself.";
	questoes_us[55] = "Is always prepared.";
	questoes_us[56] = "Becomes overwhelmed by events.";
	questoes_us[57] = "Has a lot of fun.";
	questoes_us[58] = "Believes that there is no absolute right or wrong.";
	questoes_us[59] = "Feels sympathy for those who are worse off than him/herself.";
	questoes_us[60] = "Chooses his/her words with care.";
	questoes_us[61] = "Is afraid of many things.";
	questoes_us[62] = "Feels comfortable around people.";
	questoes_us[63] = "Loves to daydream.";
	questoes_us[64] = "Trusts what people say.";
	questoes_us[65] = "Handles tasks smoothly.";
	questoes_us[66] = "Gets upset easily.";
	questoes_us[67] = "Enjoys being part of a group.";
	questoes_us[68] = "Sees beauty in things that others might not notice.";
	questoes_us[69] = "Uses flattery to get ahead.";
	questoes_us[70] = "Wants everything to be \"just right.\"";
	questoes_us[71] = "Is often down in the dumps.";
	questoes_us[72] = "Can talk others into doing things.";
	questoes_us[73] = "Is passionate about causes.";
	questoes_us[74] = "Loves to help others.";
	questoes_us[75] = "Pays his/her bills on time.";
	questoes_us[76] = "Finds it difficult to approach others.";
	questoes_us[77] = "Does a lot in him/her spare time.";
	questoes_us[78] = "Is interested in many things.";
	questoes_us[79] = "Hates to seem pushy.";
	questoes_us[80] = "Turns plans into actions.";
	questoes_us[81] = "Does things he/she later regrets.";
	questoes_us[82] = "Loves action.";
	questoes_us[83] = "Has a rich vocabulary.";
	questoes_us[84] = "Considers him/herself an average person.";
	questoes_us[85] = "Starts tasks right away.";
	questoes_us[86] = "Feels that he/she is unable to deal with things.";
	questoes_us[87] = "Expresses childlike joy.";
	questoes_us[88] = "Believes that criminals should receive help rather than punishment.";
	questoes_us[89] = "Values cooperation over competition.";
	questoes_us[90] = "Sticks to his/her chosen path.";
	questoes_us[91] = "Gets stressed out easily.";
	questoes_us[92] = "Acts comfortably with others.";
	questoes_us[93] = "Likes to get lost in thought.";
	questoes_us[94] = "Believes that people are basically moral.";
	questoes_us[95] = "Is sure of his/her ground.";
	questoes_us[96] = "Is often in a bad mood.";
	questoes_us[97] = "Involves others in what he/she is doing.";
	questoes_us[98] = "Loves flowers.";
	questoes_us[99] = "Uses others for his/her own ends.";
	questoes_us[100] = "Loves order and regularity.";
	questoes_us[101] = "Has a low opinion of him/herself.";
	questoes_us[102] = "Seeks to influence others.";
	questoes_us[103] = "Enjoys examining him/herself and his/her life.";
	questoes_us[104] = "Is concerned about others.";
	questoes_us[105] = "Tells the truth.";
	questoes_us[106] = "Is afraid to draw attention to him/herself.";
	questoes_us[107] = "Can manage many things at the same time.";
	questoes_us[108] = "Likes to begin new things.";
	questoes_us[109] = "Has a sharp tongue.";
	questoes_us[110] = "Plunges into tasks with all his/her heart.";
	questoes_us[111] = "Goes on binges.";
	questoes_us[112] = "Enjoys being part of a loud crowd.";
	questoes_us[113] = "Can handle a lot of information.";
	questoes_us[114] = "Seldoms toot him/her own horn.";
	questoes_us[115] = "Gets to work at once.";
	questoes_us[116] = "Can't make up his/her mind.";
	questoes_us[117] = "Laughs his/her way through life.";
	questoes_us[118] = "Believes in one true religion.";
	questoes_us[119] = "Suffers from others' sorrows.";
	questoes_us[120] = "Jumps into things without thinking.";
	questoes_us[121] = "Gets caught up in his/her problems.";
	questoes_us[122] = "Cheers people up.";
	questoes_us[123] = "Indulges in him/her fantasies.";
	questoes_us[124] = "Believes in human goodness.";
	questoes_us[125] = "Comes up with good solutions.";
	questoes_us[126] = "Loses his/her temper.";
	questoes_us[127] = "Loves surprise parties.";
	questoes_us[128] = "Enjoys the beauty of nature.";
	questoes_us[129] = "Knows how to get around the rules.";
	questoes_us[130] = "Does things according to a plan.";
	questoes_us[131] = "Has frequent mood swings.";
	questoes_us[132] = "Takes control of things.";
	questoes_us[133] = "Tries to understand him/herself.";
	questoes_us[134] = "Has a good word for everyone.";
	questoes_us[135] = "Listens to his/her conscience.";
	questoes_us[136] = "Only feels comfortable with friends.";
	questoes_us[137] = "Reacts quickly.";
	questoes_us[138] = "Prefers to stick with things that he/she knows.";
	questoes_us[139] = "Contradicts others.";
	questoes_us[140] = "Does more than what's expected of him/her.";
	questoes_us[141] = "Loves to eat.";
	questoes_us[142] = "Enjoys being reckless.";
	questoes_us[143] = "Enjoys thinking about things.";
	questoes_us[144] = "Believes that he/she is better than others.";
	questoes_us[145] = "Carrys out his/her plans.";
	questoes_us[146] = "Gets overwhelmed by emotions.";
	questoes_us[147] = "Loves life.";
	questoes_us[148] = "Tends to vote for conservative political candidates.";
	questoes_us[149] = "Is not interested in other people's problems.";
	questoes_us[150] = "Makes rash decisions.";
	questoes_us[151] = "Is not easily bothered by things.";
	questoes_us[152] = "Is hard to get to know.";
	questoes_us[153] = "Spends time reflecting on things.";
	questoes_us[154] = "Thinks that all will be well.";
	questoes_us[155] = "Knows how to get things done.";
	questoes_us[156] = "Rarely gets irritated.";
	questoes_us[157] = "Prefers to be alone.";
	questoes_us[158] = "Does not like art.";
	questoes_us[159] = "Cheats to get ahead.";
	questoes_us[160] = "Often forgets to put things back in their proper place.";
	questoes_us[161] = "Feels desperate.";
	questoes_us[162] = "Waits for others to lead the way.";
	questoes_us[163] = "Seldoms get emotional.";
	questoes_us[164] = "Looks down on others.";
	questoes_us[165] = "Breaks rules.";
	questoes_us[166] = "Stumbles over his/her words.";
	questoes_us[167] = "Likes to take it easy.";
	questoes_us[168] = "Dislikes changes.";
	questoes_us[169] = "Loves a good fight.";
	questoes_us[170] = "Sets high standards for him/herself and others.";
	questoes_us[171] = "Rarely overindulges.";
	questoes_us[172] = "Acts wild and crazy.";
	questoes_us[173] = "Is not interested in abstract ideas.";
	questoes_us[174] = "Thinks highly of him/herself.";
	questoes_us[175] = "Finds it difficult to get down to work.";
	questoes_us[176] = "Remains calm under pressure.";
	questoes_us[177] = "Looks at the bright side of life.";
	questoes_us[178] = "Believes that too much tax money goes to support artists.";
	questoes_us[179] = "Tends to dislike soft-hearted people.";
	questoes_us[180] = "Likes to act on a whim.";
	questoes_us[181] = "Is relaxed most of the time.";
	questoes_us[182] = "Often feels uncomfortable around others.";
	questoes_us[183] = "Seldoms daydream.";
	questoes_us[184] = "Distrusts people.";
	questoes_us[185] = "Misjudges situations.";
	questoes_us[186] = "Seldoms get mad.";
	questoes_us[187] = "Wants to be left alone.";
	questoes_us[188] = "Does not like poetry.";
	questoes_us[189] = "Puts people under pressure.";
	questoes_us[190] = "Leaves a mess in his/her room.";
	questoes_us[191] = "Feels that his/her life lacks direction.";
	questoes_us[192] = "Keeps in the background.";
	questoes_us[193] = "Is not easily affected by his/her emotions.";
	questoes_us[194] = "Is indifferent to the feelings of others.";
	questoes_us[195] = "Breaks his/her promises.";
	questoes_us[196] = "Is not embarrassed easily.";
	questoes_us[197] = "Likes to take his/her time.";
	questoes_us[198] = "Doesn't like the idea of change.";
	questoes_us[199] = "Yells at people.";
	questoes_us[200] = "Demands quality.";
	questoes_us[201] = "Easily resists temptations.";
	questoes_us[202] = "Willing to try anything once.";
	questoes_us[203] = "Avoids philosophical discussions.";
	questoes_us[204] = "Has a high opinion of his/herself.";
	questoes_us[205] = "Wastes his/her time.";
	questoes_us[206] = "Can handle complex problems.";
	questoes_us[207] = "Laughs aloud.";
	questoes_us[208] = "Believes laws should be strictly enforced.";
	questoes_us[209] = "Believes in an eye for an eye.";
	questoes_us[210] = "Rushs into things.";
	questoes_us[211] = "Is not easily disturbed by events.";
	questoes_us[212] = "Avoids contacts with others.";
	questoes_us[213] = "Does not have a good imagination.";
	questoes_us[214] = "Suspects hidden motives in others.";
	questoes_us[215] = "Doesn't understand things.";
	questoes_us[216] = "Is not easily annoyed.";
	questoes_us[217] = "Doesn't like crowded events.";
	questoes_us[218] = "Does not enjoy going to art museums.";
	questoes_us[219] = "Pretends to be concerned for others.";
	questoes_us[220] = "Leaves his/her belongings around.";
	questoes_us[221] = "Seldoms feel blue.";
	questoes_us[222] = "Has little to say.";
	questoes_us[223] = "Rarely notices his/her emotional reactions.";
	questoes_us[224] = "Makes people feel uncomfortable.";
	questoes_us[225] = "Gets others to do his/her duties.";
	questoes_us[226] = "Is comfortable in unfamiliar situations.";
	questoes_us[227] = "Likes a leisurely lifestyle.";
	questoes_us[228] = "Is a creature of habit.";
	questoes_us[229] = "Insults people.";
	questoes_us[230] = "Is not highly motivated to succeed.";
	questoes_us[231] = "Is able to control his/her cravings.";
	questoes_us[232] = "Seeks danger.";
	questoes_us[233] = "Has difficulty understanding abstract ideas.";
	questoes_us[234] = "Knows the answers to many questions.";
	questoes_us[235] = "Needs a push to get started.";
	questoes_us[236] = "Knows how to cope.";
	questoes_us[237] = "Amuses his/her friends.";
	questoes_us[238] = "Believes that they coddle criminals too much.";
	questoes_us[239] = "Tries not to think about the needy.";
	questoes_us[240] = "Does crazy things.";
	questoes_us[241] = "Doesn't worry about things that have already happened.";
	questoes_us[242] = "Is not really interested in others.";
	questoes_us[243] = "Seldoms get lost in thought.";
	questoes_us[244] = "Is wary of others.";
	questoes_us[245] = "Has little to contribute.";
	questoes_us[246] = "Keeps him/her cool.";
	questoes_us[247] = "Avoids crowds.";
	questoes_us[248] = "Does not like concerts.";
	questoes_us[249] = "Takes advantage of others.";
	questoes_us[250] = "Is not bothered by messy people.";
	questoes_us[251] = "Feels comfortable with him/herself.";
	questoes_us[252] = "Doesn't like to draw attention to him/herself.";
	questoes_us[253] = "Experiences very few emotional highs and lows.";
	questoes_us[254] = "Turns his/her back on others.";
	questoes_us[255] = "Does the opposite of what is asked.";
	questoes_us[256] = "Is not bothered by difficult social situations.";
	questoes_us[257] = "Lets things proceed at their own pace.";
	questoes_us[258] = "Dislikes new foods.";
	questoes_us[259] = "Gets back at others.";
	questoes_us[260] = "Does just enough work to get by.";
	questoes_us[261] = "Never spends more than he/she can afford.";
	questoes_us[262] = "Would never go hang gliding or bungee jumping.";
	questoes_us[263] = "Is not interested in theoretical discussions.";
	questoes_us[264] = "Boasts about his/her virtues.";
	questoes_us[265] = "Has difficulty starting tasks.";
	questoes_us[266] = "Readily overcomes setbacks.";
	questoes_us[267] = "Is not easily amused.";
	questoes_us[268] = "Believes that they should be tough on crime.";
	questoes_us[269] = "Believes people should fend for themselves.";
	questoes_us[270] = "Acts without thinking.";
	questoes_us[271] = "Adapts easily to new situations.";
	questoes_us[272] = "Keeps others at a distance.";
	questoes_us[273] = "Has difficulty imagining things.";
	questoes_us[274] = "Believes that people are essentially evil.";
	questoes_us[275] = "Doesn't see the consequences of things.";
	questoes_us[276] = "Rarely complains.";
	questoes_us[277] = "Seeks quiet.";
	questoes_us[278] = "Does not enjoy watching dance performances.";
	questoes_us[279] = "Obstructs others' plans.";
	questoes_us[280] = "Is not bothered by disorder.";
	questoes_us[281] = "Is very pleased with him/herself.";
	questoes_us[282] = "Holds back his/her opinions.";
	questoes_us[283] = "Doesn't understand people who get emotional.";
	questoes_us[284] = "Takes no time for others.";
	questoes_us[285] = "Misrepresents the facts.";
	questoes_us[286] = "Is able to stand up for him/herself.";
	questoes_us[287] = "Reacts slowly.";
	questoes_us[288] = "Is attached to conventional ways.";
	questoes_us[289] = "Holds a grudge.";
	questoes_us[290] = "Puts little time and effort into his/her work.";
	questoes_us[291] = "Never splurges.";
	questoes_us[292] = "Dislikes loud music.";
	questoes_us[293] = "Avoids difficult reading material.";
	questoes_us[294] = "Makes him/herself the center of attention.";
	questoes_us[295] = "Postpones decisions.";
	questoes_us[296] = "Is calm even in tense situations.";
	questoes_us[297] = "Seldoms joke around.";
	questoes_us[298] = "Likes to stand during the national anthem.";
	questoes_us[299] = "Can't stand weak people.";
	questoes_us[300] = "Often makes last-minute plans.";

var questoesTIPIus =  new Array (11);
	questoesTIPIus[1] = "Extroverted, enthusiast.";
    questoesTIPIus[2] = "Critism, conflituous.";
    questoesTIPIus[3] = "confident, auto-discipline.";
    questoesTIPIus[4] = "Ansious,get borred easily.";
    questoesTIPIus[5] = "Open minded, dificult.";
    questoesTIPIus[6] = "Calm.";
    questoesTIPIus[7] = "Compreensiva/solidária, afetuosa.";
    questoesTIPIus[8] = "Desorganizada, descuidada.";
    questoesTIPIus[9] = "Calma, emocionalmente estável.";
    questoesTIPIus[10] = "Convencional, pouco criativa.";
	

function arrayQuestions(x) {
	if (x == "pt"){
		return this.questoesNEO;
	}else{
		return this.questoes_us;
	}
}

function arrayQuestionsTIPI(x) {
	alert("entrou nas questoes");
	if (x == "pt"){
		return questoesTIPI;
	}else{ 
		return questoesTIPIus;
	}
}
