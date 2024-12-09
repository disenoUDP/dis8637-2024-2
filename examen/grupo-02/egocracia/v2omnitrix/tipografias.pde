// Tipografias

// la fuente que quiero usar para resaltar la letra seleccionada
PFont font;  
PFont robotoBlack100;
PFont robotoBlack50;
PFont robotoThin40;
PFont robotoThin50;
PFont robotoBold;
PFont robotoBlack15;

void inicializarTipografias() {
  font = createFont("RobotoRegular-3m4L.ttf", 32);
  robotoBlack100 = createFont("RobotoBlackItalic-LmMD.ttf", 100);
  robotoThin40 = createFont("RobotoThin-xjmK.ttf", 40);
  robotoBlack50 = createFont("RobotoBlack-Powx.ttf", 50);
  robotoThin50 = createFont("RobotoThin-xjmK.ttf", 50);
  robotoBold = createFont("RobotoMedium-Owv4.ttf", 50);
}
