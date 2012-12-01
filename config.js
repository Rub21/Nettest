var Settings = {
  Logo            : "header-logo.png",	// URL to logo image 
  MinimumDlSpeed  : 100,	// Required download speed in kbit/s
  MinimumUlSpeed  : 100,        // Required upload speed in kbit/s
  MaximumTime     : 300,	// Required response time (milliseconds)
  RequestCount    : 20,		// Number of requests to perform
  Debug           : true	// true, if detailed output of the test run needs to be shown, otherwise false
};
var Strings = {
  StartTest       : "Iniciar prueba",
  TestInProgress  : "La prueba se está ejecutando, espere por favor...",
  Title           : "Prueba de celeridad de conexión",
  SubTitle        : "Esta página le permite probar la celeridad de su conexión hacia el servidor.",
  TestFailed      : {
     Title   : "Lo sentimos, su conexión es algo lenta y podría no ser suficiente para los objectivos de esta aplicación.",
     Message : "(Si esto fue su primera prueba, intente correrla nuevamente en un par de horas)"
  },
  TestPassed : {
    Title  : "Felicidades, su conexión cumple con los requerimientos.",
    Message : ""
  }
};
