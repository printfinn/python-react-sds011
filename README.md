# DIY PM2.5 monitor program.

This is the source code of a Youtube video tutorial: [DIY PM2.5 Monitor with Python ReactJS and SDS011 on 5" Chipsee Touch Panel PC](https://youtu.be/RT2gtuvd2A4)

<img width="1198" alt="Screenshot 2023-07-28 at 18 58 24" src="https://github.com/printfinn/python-react-sds011/assets/10386624/ffa953ee-bb94-423e-8fce-bf9958e4e6d8">

# Hardware:
1. The Chipsee 5 inch PC: PPC-A55-050. (Or any PC!)
1. The sensor: Nova SDS011.
1. TTL USB Convertor: CP2102.

<img width="1426" alt="Screenshot 2023-07-28 at 18 59 58" src="https://github.com/printfinn/python-react-sds011/assets/10386624/1b2eebdc-9933-452e-ad0e-d74aec225fa7">

# Software
The program needs `Python` and `Node/NPM`.

##
Install Python Requirements
```bash
cd sds011_py
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

## Start Python Flask
```bash
cd sds011_py
flask run --debug
```

## Start React HTML
```bash
cd sds011_react
npm run dev
```

You can test the Python server with:

```bash
curl 127.0.0.1:5000
```

To visit our React webpage, open a browser and visit: `http://localhost:5173`.

