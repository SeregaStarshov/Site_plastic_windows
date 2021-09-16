import documents from "./modules/documents";
import requestCall from "./modules/modalCall";
import callOurServices from "./modules/ourServices";
import showSliderProfits from "./modules/sliderProfits";
import timer from "./modules/timer";


//========заказать звонок============
requestCall();

//========ourServices================
callOurServices();

//=========sliderProfits=============
showSliderProfits();

//=========timer=====================
timer('21 September 2021');

//========documents==================
documents();
