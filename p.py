import requests

def obtener_campesinos():
    print("Reload Api..")
    try:
        r = requests.get('https://render-delcamp.onrender.com/campesinos')
        if r:
            print("Api reloaded successfully...")
            campesinos = r.json()
            for campesino in campesinos:
                print(f"Nombre: {campesino['nombre_finca']}")
                print(f"Edad: {campesino['ubicacion_finca']}")
                print(f"Ubicación: {campesino['correo']}")
                print("-----------------------")
        else:
            print("No se pudo obtener la lista de campesinos.")
    except Exception as e:
        print(f"Ocurrió un error al procesar la solicitud: {e}")

obtener_campesinos()

