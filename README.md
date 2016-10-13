# SSI 1 - Marcin Migda 42i

### Wymagania:

 * Python 2.7
 * Flask

Aby zainstalować Flask przy pomocy pythonowego pip'a wpisujemy:

```
pip install flask
```

### Uruchomienie

Do uruchomienia używamy komendy:
```
python app.py
```

Następnie w przeglądarce należy wejść pod adres:
```
localhost:5000
```

### Co zostało wykorzystane

* AJAX
* CSS
* XMLHttpRequest
* JSON
* jQuery

### Co robi?

Jest to przykładowy panel rejestracji.
W polu `Username` wpisujemy nazwę użytkownika, w polu `Password` wpisujemy hasło.
Następnie naciskamy przycisk `Register`.
Jeśli użytkownik nie był wcześniej zarejestrowany poniżej pojawi się napis `Registration success`.
Jeśli natomiast już był rejestrowany zamiast powyższego napisu pojawi się na czerwono napis `Given user exists`.
Domyślnie istnieje od początku w bazie użytkownik: `user` dla testu, jednak do czasu zamknięcia aplikacji każdy rejestrowany przez nas użytkownik jest dodawany do bazy i przy ponownej próbie rejestracji użytkownika o takiej samej nazwie zostanie wyświetlona odpowiednia informacja.

Dodatkowo w konsoli przeglądarki w logach zostaje wyświetlony JSON z przesłanymi przez nas danymi.

