echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
mkdir ~/local
mkdir ~/node-latest-install
cd ~/node-latest-install
curl http://nodejs.org/dist/node-v0.4.12.tar.gz | tar xz --strip-components=1
./configure --prefix=~/local
make install
curl http://npmjs.org/install.sh | sh
