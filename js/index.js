import documents from "./modules/documents";
import requestCall from "./modules/modalCall";
import callOurServices from "./modules/ourServices";
import showSliderProfits from "./modules/sliderProfits";
import timer from "./modules/timer";
import scroll from "./modules/scroll";
import submitForm from "./modules/form";
import calc from "./modules/calc";
import sliderOurServices from "./modules/sliderOurServices";

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

//=========scroll====================
scroll();

//===========form===================
submitForm();

//==============calc===============
calc();

//=========sliderOurServices========
sliderOurServices();