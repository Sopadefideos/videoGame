<?php
class FighterInfo
{
    private $fighter = array();
    private $name;
    private $description;
    private $speed;
    private $strength;
    private $defense;
    private $cooldown;
    private $accuracy;
    private $img;
    private $button;

    function  __construct($name,$description,$speed,$strength,$defense,$cooldown,$accuracy,$img,$button){

    $this-> $name = $name;
    $this-> $description = $description;
    $this-> $speed = $speed;
    $this-> $strength = $strength;
    $this-> $defense = $defense;
    $this-> $cooldown = $cooldown;
    $this-> $accuracy = $accuracy;
    $this-> $img = $img;
    $this-> $button = $button;
    }

    public function addFighter($arr,$name,$description,$speed,$strength,$defense,$cooldown,$accuracy,$img,$button){

     array_push($this->fighter,new FighterInfo($name,$description,$speed,$strength,$defense,$cooldown,$accuracy,$img,$button));

    } 

}


$fighter[0] = new FighterInfo();
$fighter[0]-> $name = "Clark";
$fighter[0]-> $description = "Protagonista de la futura serie de animación espacial Deep Space.Se trata del líder de la escuadra primate de exploración 5 y se caracteriza por ser un capitán decidido y valiente.Su capacidad para utilizar las herramientas a su disposición son excelentes.";
$fighter[0]-> $speed = 75;
$fighter[0]-> $strength = 50;
$fighter[0]-> $defense = 40;
$fighter[0]-> $cooldown = 75;
$fighter[0]-> $accuracy = 100;
$fighter[0]-> $img = "clark.gif";
$fighter[0]-> $button = "nose";

$fighter[1] = new FighterInfo();
$fighter[1]-> $name = "Barbasucia";
$fighter[1]-> $description = "Protagonista de la futura serie de animación “Dark Seas”. Barbasucia fue considerado uno de los mayores piratas que jamás hayan navegado los siete mares, pero encontró su final en una de sus tantas aventuras. Ahora ha vuelto a la vida para terminar el viaje que una vez empezó. 
Barbasucia se caracteriza por su uso gran uso de cañón y espada.";
$fighter[1]-> $speed = 25;
$fighter[1]-> $strength = 40;
$fighter[1]-> $defense = 40;
$fighter[1]-> $cooldown = 80;
$fighter[1]-> $accuracy = 100;
$fighter[1]-> $img = "barbasucia.gif";
$fighter[1]-> $button = "nose";

$fighter[2] = new FighterInfo();
$fighter[2]-> $name = "Ellaine Mujer Calabaza" ;
$fighter[2]-> $description = "Procedente de un proyecto cancelado del estudio. Ellaine se caracteriza por su actitud errática y agresiva. Su arma característica es una guadaña, lo que la hace una oponente muy peligrosa a media distancia.";
$fighter[2]-> $speed = 25;
$fighter[2]-> $strength = 75 ;
$fighter[2]-> $defense = 75;
$fighter[2]-> $cooldown = 25;
$fighter[2]-> $accuracy = 100;
$fighter[2]-> $img = "ellaine.gif";
$fighter[2]-> $button = "nose"; 

$fighter[3] = new FighterInfo();
$fighter[3]-> $name = "Hera Arpia";
$fighter[3]-> $description = "Reina de las arpías y una de las principales antagonistas de la futura serie de animación “Irae Spartae”. Su dominio del viento la hace una adversaria muy peligrosa a largas distancias y sus garras pueden causar grandes daños en sus victimas.";
$fighter[3]-> $speed = 100;
$fighter[3]-> $strength = 50;
$fighter[3]-> $defense = 50;
$fighter[3]-> $cooldown = 75;
$fighter[3]-> $accuracy = 75;
$fighter[3]-> $img = "hera.gif";
$fighter[3]-> $button = "nose"; 

$fighter[4] = new FighterInfo();
$fighter[4]-> $name = "Mr Boceto";
$fighter[4]-> $description = "Su nombre lo dice todo. Todo un misterio inacabado.";
$fighter[4]-> $speed = 75;
$fighter[4]-> $strength = 25;
$fighter[4]-> $defense = 75;
$fighter[4]-> $cooldown = 50;
$fighter[4]-> $accuracy = 100;
$fighter[4]-> $img = "mr_boceto.gif";
$fighter[4]-> $button = "nose"; 

$fighter[5] = new FighterInfo();
$fighter[5]-> $name = "Nake Exploradora" ;
$fighter[5]-> $description = "Protagonista de la futura serie de animación “Dungeon Seeker”. Se trata de una exploradora de reliquias procedentes de civilizaciones ya desaparecidas, con el objetivo de intentar ayudar a la humanidad gracias a ellas. Su mayor herramienta se trata de un látigo que utiliza tanto para atacar como para desplazarse rápidamente por el escenario.";
$fighter[5]-> $speed = 75 ;
$fighter[5]-> $strength = 25 ;
$fighter[5]-> $defense = 75 ;
$fighter[5]-> $cooldown = 50;
$fighter[5]-> $accuracy = 75;
$fighter[5]-> $img = "nake.gif";
$fighter[5]-> $button = "nose"; 

$fighter[6] = new FighterInfo();
$fighter[6]-> $name = "RAG´HUR ALIEN" ;
$fighter[6]-> $description = "Miembro de la raza alienígena Xenobites y principal antagonista de Clark y su escuadra. Se caracteriza por su capacidad para causar grandes estragos gracias a sus tentáculos y tecnología avanzada.";
$fighter[6]-> $speed = 25 ;
$fighter[6]-> $strength = 25 ;
$fighter[6]-> $defense = 75 ;
$fighter[6]-> $cooldown = 100;
$fighter[6]-> $accuracy = 50 ;
$fighter[6]-> $img = "raghur.gif" ;
$fighter[6]-> $button = "nose"; 

$fighter[7] = new FighterInfo();
$fighter[7]-> $name = "Syr Aimeric Caballero Medieval" ;
$fighter[7]-> $description = "Protagonista de la futura serie de animación de fantasía mediaval “Legends of Aurixia”. Caballero procedente de una de las ciudades más importantes de su reino. Su carácter fuerte le permite enfrentarse a cualquier peligro sin ningún miedo, además, es un experto en todo tipo de artes con la espada, lo que lo convierte en un rival formidable en combate cercano. Que su estilo estético no te despiste." ;
$fighter[7]-> $speed = 60;
$fighter[7]-> $strength = 75;
$fighter[7]-> $defense = 100;
$fighter[7]-> $cooldown =50 ;
$fighter[7]-> $accuracy = 25;
$fighter[7]-> $img = "syr_aimeric.gif" ;
$fighter[7]-> $button = "nose"; 

$fighter[8] = new FighterInfo();
$fighter[8]-> $name = "Techney Robot";
$fighter[8]-> $description = "Protagonista de la futura serie de animación “Cybertopia”. Techney se trata de un pequeño ingeniero procedente de la ciudad robótica conocida como Elysium. Sus invenciones son muy conocidas en la ciudad y han ayudado en más de una ocasión al avance de la misma. Se trata de un rival muy peligroso a largas y medias distancias gracias a su capacidad para zonear a sus contrincantes fácilmente.";
$fighter[8]-> $speed = 40 ;
$fighter[8]-> $strength = 40 ;
$fighter[8]-> $defense = 75;
$fighter[8]-> $cooldown = 25;
$fighter[8]-> $accuracy = 75;
$fighter[8]-> $img ="techney.gif" ;
$fighter[8]-> $button = "nose" ; 

$fighter[9] = new FighterInfo();
$fighter[9]-> $name = "Uldah Tiburon";
$fighter[9]-> $description = "Nacido de la accidentada mezcla entre ADN humano y de tiburón, esta bestia se encarga de garantizar la seguridad en muchos de los rincones del océano. Se caracteriza por ser totalmente impredecible en combate cercano gracias a su fuerza bruta y letal dentadura." ;
$fighter[9]-> $speed = 25;
$fighter[9]-> $strength = 100;
$fighter[9]-> $defense = 75;
$fighter[9]-> $cooldown = 25;
$fighter[9]-> $accuracy = 50;
$fighter[9]-> $img = "tiburon.gif";
$fighter[9]-> $button = "nose"; 
?>