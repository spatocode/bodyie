# Bodyie

## System requirements:

- Git
- Python **3.6.x** for **Linux and Windows**. **3.5.x** for --- **MacOS** ---.
- Django **1.11**
- Nodejs **v12.x**
- docker
- docker-compose
- Postgresql **v12.x** **Windows/Linux/MacOS**
- React (included)

## Setup git

--- **Windows** ---

### click on the link and install the latest version of **git**

```
https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.1/Git-2.33.0-64-bit.exe
```

--- **Linux** ---

**Check if you have git by opening your terminal and write:**

```
git --version
```

**If you don't have git on your machine, do the following:**

**You might need to add _sudo_ before each line due linux account permissions**

#### Execute the following sequentially

```
add-apt-repository ppa:git-core/ppa
apt update
apt install git
```

--- **MacOS** ---

**Check if you have git by opening your terminal and write:**

```
git --version
```

**If you don't have git on your machine, do the following:**

- make sure you have **homebrew**, if not run:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- install git by running:

```
brew install git
```

---

## Setup GitHub desktop GUI version [Optionally]

--- **Windows** ---

```
https://central.github.com/deployments/desktop/desktop/latest/win32
```

--- **MacOS** ---

```
https://central.github.com/deployments/desktop/desktop/latest/darwin
```

--- **linux (Ubuntu)** ---

**You might need to add [sudo] before each line due linux account permissions**

**This setup only works with ubuntu based versions**

#### Execute

```
sudo wget https://github.com/shiftkey/desktop/releases/download/release-2.9.0-linux2/GitHubDesktop-linux-2.9.0-linux2.deb

sudo apt-get install gdebi-core

sudo gdebi GitHubDesktop-linux-2.9.0-linux2.deb
```

---

## Setup python3 and pip3

--- **Windows** ---

**To run the project correctly, you must install version 3.6 specifically.**

- Full installer:

```
https://www.python.org/ftp/python/3.6.8/python-3.6.8-amd64.exe
```

- Web based installer:

```
https://www.python.org/ftp/python/3.6.8/python-3.6.8-amd64-webinstall.exe
```

**Please note that pip is included with python installation**

--- **MacOS** ---

**Please note that this setup for Inter processors only, for M1 chip, you must check https://python.org for more info**

- Full installation:

```
https://www.python.org/ftp/python/3.5.2/python-3.5.2-macosx10.6.pkg
```

--- **linux (Ubuntu)** ---

**This setup only works with ubuntu based versions**

```
sudo apt update

sudo apt install software-properties-common

sudo add-apt-repository ppa:deadsnakes/ppa

sudo apt install python3.6
```

- To install extra libraries including gcc:

```
sudo apt-get install libpq-dev python-dev libxml2-dev libxslt1-dev libldap2-dev libsasl2-dev libffi-dev

sudo apt install python3.6-dev

sudo apt-get install gcc
```

- To install pip3:

```
sudo apt install python3-pip
```

---

## Nodejs

**Windows, MacOS and Linux**

- Check version

```
node --version
```

**Please note in order to run the project correctly, you must have _nodejs v12.x_**

--- **Windows** ---

**If you have another version of nodejs, you must uninstall that version.**

- Install Node js

```
https://nodejs.org/dist/v12.13.0/node-v12.13.0-x64.msi
```

- Check version

```
node --version
```

--- **MacOS** ---

visit `https://nodejs.org/en/blog/release/v12.13.0/`

--- **Linux** ---

- Install using NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.bashrc

nvm list-remote

nvm install v12.22.6
```

**v12.22.6 is the current **LTS** version of node v12.**

---

## pipenv **or** Virtualenv

**This installation for Windows, Linux and MacOS**

- Install **pipenv**

```
pip install pipenv
```

- Go to project folder and run:
  **Windows and Linux**

```
pipenv shell --python 3.6
```

--- **MacOS** ---

```
pipenv shell --python 3.5
```

---

**MacOS & Linux**

- Install **Virtualenv**

```
sudo apt remove virtualenv && sudo apt purge virtualenv

pip3 install virtualenv
```

- Create the virtualenv:

--- **Windows** ---

- Install Virtualenv

```
pip install virtualenv
```

- Create virtualenv in the directory you are in:

```
virtualenv bodyie
```

```
python3 -m virtualenv ~/.pyenv/bodyie-env
```

---

## Setup Postgresql

**MacOs and linux (Ubuntu)**

- run

```
sudo apt update

sudo apt -y install vim bash-completion wget

sudo apt -y upgrade
```

- Reboot your machine
- Run:

```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list

sudo apt update
```

- Install PostgreSQL 12:

```
sudo apt -y install postgresql-12 postgresql-client-12
```

--- **Windows** ---

- Install:

```
https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=48
```

- Log into postgresql shell

--- **Windows** ---

```
psql postgres
```

**Linux and MacOS**

```
sudo su - postgres
```

- Run the PostgreSQL interactive terminal

**Linux and MacOS**

```
psql -U postgres
```

- Create database role

```
CREATE ROLE bodyie WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD '123456';
```

**Make sure to make another rule using your username name**

```
CREATE ROLE <username> WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD '123456';
```

- Create a database

```
create database bodyie;
```

Then quit the interactive terminal

```
\q
```

### Activate the virtualenv or Pipenv

**Make sure you are in the project directory**

--- **Windows** ---

```
bodyie\Scripts\activate.bat
```

**MacOS and Linux**

```
source ~/.pyenv/bodyie-env/bin/activate
```

---

### Setup project dependencies

- Install back-end dependencies

* Activate the **virtualenv / pipenv** then change the current directory to the project's folder

--- **Windows** ---

```
pip install -r requirements.txt
```

**MacOS and Linux**

```
 pip3 install -r requirements.txt
```

- Install front-end dependencies

* Run:

```
npm install
```

```
npm start
```
