const iconPica = "img/icons/icon-pica.svg"
const iconTrebol = "img/icons/icon-trebol.svg"
const iconHeart = "img/icons/icon-heart.svg"
const iconDiamond = "img/icons/icon-diamond.svg"

let cards = [

    //CARTAS DE PICA
    
    {número : "AS", palo : "PICA", valor : 10, ejercicio : "burpees", tipoDeEjercicio : "A", iconCard: "img/icons/icon-pica.svg"},
    {número : "2", palo : "PICA", valor : 2, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-pica.svg"},
    {número : "3", palo : "PICA", valor : 3, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-pica.svg"},
    {número : "4", palo : "PICA", valor : 4, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-pica.svg"},
    {número : "5", palo : "PICA", valor : 5, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-pica.svg"},
    {número : "6", palo : "PICA", valor : 6, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-pica.svg"},
    {número : "7", palo : "PICA", valor : 7, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-pica.svg"},
    {número : "8", palo : "PICA", valor : 8, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-pica.svg"},
    {número : "9", palo : "PICA", valor : 9, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-pica.svg"},
    {número : "10", palo : "PICA", valor : 10, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-pica.svg"},
    {número : "J", palo : "PICA", valor : 20, ejercicio : "abdominales cortitos", tipoDeEjercicio : "J", iconCard: "img/icons/icon-pica.svg"},
    {número : "Q", palo : "PICA", valor : 20, ejercicio : "abdominales bicicleta", tipoDeEjercicio : "K", iconCard: "img/icons/icon-pica.svg"},
    {número : "K", palo : "PICA", valor : 20, ejercicio : "abdominales bolita", tipoDeEjercicio : "L", iconCard: "img/icons/icon-pica.svg"},

    //CARTAS DE TRÉBOL

    {número : "AS", palo : "TRÉBOL", valor : 10, ejercicio : "burpees", tipoDeEjercicio : "A", iconCard: "img/icons/icon-trebol.svg"},
    {número : "2", palo : "TRÉBOL", valor : 2, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-trebol.svg"},
    {número : "3", palo : "TRÉBOL", valor : 3, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-trebol.svg"},
    {número : "4", palo : "TRÉBOL", valor : 4, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-trebol.svg"},
    {número : "5", palo : "TRÉBOL", valor : 5, ejercicio : "flexiones con aplauso", tipoDeEjercicio : "B", iconCard: "img/icons/icon-trebol.svg"},
    {número : "6", palo : "TRÉBOL", valor : 6, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-trebol.svg"},
    {número : "7", palo : "TRÉBOL", valor : 7, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-trebol.svg"},
    {número : "8", palo : "TRÉBOL", valor : 8, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-trebol.svg"},
    {número : "9", palo : "TRÉBOL", valor : 9, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-trebol.svg"},
    {número : "10", palo : "TRÉBOL", valor : 10, ejercicio : "flexiones comunes", tipoDeEjercicio : "C", iconCard: "img/icons/icon-trebol.svg"},
    {número : "J", palo : "TRÉBOL", valor : 20, ejercicio : "abdominales tijera", tipoDeEjercicio : "M", iconCard: "img/icons/icon-trebol.svg"},
    {número : "Q", palo : "TRÉBOL", valor : 20, ejercicio : "abdominales bisagra", tipoDeEjercicio : "N", iconCard: "img/icons/icon-trebol.svg"},
    {número : "K", palo : "TRÉBOL", valor : 20, ejercicio : "empujes de cadera", tipoDeEjercicio : "O", iconCard: "img/icons/icon-trebol.svg"},

    //CARTAS DE CORAZÓN
    
    {número : "AS", palo : "CORAZÓN", valor : 10, ejercicio : "burpees al revés", tipoDeEjercicio : "D", iconCard: "img/icons/icon-heart.svg"},
    {número : "2", palo : "CORAZÓN", valor : 2, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-heart.svg"},
    {número : "3", palo : "CORAZÓN", valor : 3, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-heart.svg"},
    {número : "4", palo : "CORAZÓN", valor : 4, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-heart.svg"},
    {número : "5", palo : "CORAZÓN", valor : 5, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-heart.svg"},
    {número : "6", palo : "CORAZÓN", valor : 6, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-heart.svg"},
    {número : "7", palo : "CORAZÓN", valor : 7, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-heart.svg"},
    {número : "8", palo : "CORAZÓN", valor : 8, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-heart.svg"},
    {número : "9", palo : "CORAZÓN", valor : 9, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-heart.svg"},
    {número : "10", palo : "CORAZÓN", valor : 10, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-heart.svg"},
    {número : "J", palo : "CORAZÓN", valor : 20, ejercicio : "espinales comunes", tipoDeEjercicio : "G", iconCard: "img/icons/icon-heart.svg"},
    {número : "Q", palo : "CORAZÓN", valor : 20, ejercicio : "espinales alternados", tipoDeEjercicio : "H", iconCard: "img/icons/icon-heart.svg"},
    {número : "K", palo : "CORAZÓN", valor : 20, ejercicio : "espinales nados", tipoDeEjercicio : "I", iconCard: "img/icons/icon-heart.svg"},
    
    //CARTAS DE DIAMANTE
    
    {número : "AS", palo : "DIAMANTE", valor : 10, ejercicio : "burpees al revés", tipoDeEjercicio : "D", iconCard: "img/icons/icon-diamond.svg"},
    {número : "2", palo : "DIAMANTE", valor : 2, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-diamond.svg"},
    {número : "3", palo : "DIAMANTE", valor : 3, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-diamond.svg"},
    {número : "4", palo : "DIAMANTE", valor : 4, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-diamond.svg"},
    {número : "5", palo : "DIAMANTE", valor : 5, ejercicio : "rodillas al pecho", tipoDeEjercicio : "E", iconCard: "img/icons/icon-diamond.svg"},
    {número : "6", palo : "DIAMANTE", valor : 6, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-diamond.svg"},
    {número : "7", palo : "DIAMANTE", valor : 7, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-diamond.svg"},
    {número : "8", palo : "DIAMANTE", valor : 8, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-diamond.svg"},
    {número : "9", palo : "DIAMANTE", valor : 9, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-diamond.svg"},
    {número : "10", palo : "DIAMANTE", valor : 10, ejercicio : "sentadillas", tipoDeEjercicio : "F", iconCard: "img/icons/icon-diamond.svg"},
    {número : "J", palo : "DIAMANTE", valor : 20, ejercicio : "espinales comunes", tipoDeEjercicio : "G", iconCard: "img/icons/icon-diamond.svg"},
    {número : "Q", palo : "DIAMANTE", valor : 20, ejercicio : "espinales alternados", tipoDeEjercicio : "H", iconCard: "img/icons/icon-diamond.svg"},
    {número : "K", palo : "DIAMANTE", valor : 20, ejercicio : "espinales nados", tipoDeEjercicio : "I", iconCard: "img/icons/icon-diamond.svg"}
]





