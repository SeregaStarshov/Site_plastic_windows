import documents from "./modules/documents";
import requestCall from "./modules/modalCall";
import showSliderProfits from "./modules/sliderProfits";
import timer from "./modules/timer";
import scroll from "./modules/scroll";
import submitForm from "./modules/form";


//========заказать звонок============
requestCall();

//=========sliderProfits=============
showSliderProfits();

//=========timer=====================
timer('21 September 2021');

//========documents==================
documents();

//=========scroll====================
scroll();

//===========form===================
submitForm();