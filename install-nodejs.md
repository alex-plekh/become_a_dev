<!DOCTYPE html>
<html>
<body>
  <h1>Installing Node.js</h1>

<h2>Windows:</h2>
  <ol>
    <li>Go to the official Node.js website: <a href="https://nodejs.org/">https://nodejs.org/</a></li>
    <li>On the homepage, click on the "Download" button for the LTS version (Long Term Support).</li>
    <li>The installer will be downloaded to your computer. Double-click on the installer (.msi file) to start the installation.</li>
    <li>Follow the installation wizard's instructions. By default, Node.js will be installed with the npm package manager.</li>
  </ol>

<h2>macOS:</h2>
  <ol>
    <li>Go to the official Node.js website: <a href="https://nodejs.org/">https://nodejs.org/</a></li>
    <li>On the homepage, click on the "Download" button for the LTS version (Long Term Support).</li>
    <li>The installer will be downloaded to your computer. Double-click on the installer (.pkg file) to start the installation.</li>
    <li>Follow the installation wizard's instructions. By default, Node.js will be installed with the npm package manager.</li>
  </ol>

<h2>Linux (Ubuntu/Debian):</h2>
  <ol>
    <li>Open a terminal window.</li>
    <li>Update the package index and install the required packages:</li>
  </ol>
  <pre><code class="language-bash">sudo apt update
sudo apt install curl</code></pre>
  <ol start="3">
    <li>Install Node.js using the Node Version Manager (nvm) to manage multiple Node.js versions:</li>
  </ol>
  <pre><code class="language-bash">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</code></pre>
  <ol start="4">
    <li>Close and reopen the terminal to start using nvm.</li>
    <li>Install the latest LTS version of Node.js:</li>
  </ol>
  <pre><code class="language-bash">nvm install --lts</code></pre>

<h2>Linux (CentOS/RHEL):</h2>
  <ol>
    <li>Open a terminal window.</li>
    <li>Install the required packages:</li>
  </ol>
  <pre><code class="language-bash">sudo yum install curl</code></pre>
  <ol start="3">
    <li>Install Node.js using the Node Version Manager (nvm) to manage multiple Node.js versions:</li>
  </ol>
  <pre><code class="language-bash">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</code></pre>
  <ol start="4">
    <li>Close and reopen the terminal to start using nvm.</li>
    <li>Install the latest LTS version of Node.js:</li>
  </ol>
  <pre><code class="language-bash">nvm install --lts</code></pre>

<h2>Verifying the Installation:</h2>
  <p>After installing Node.js, you can verify the installation by opening a terminal or command prompt and running the following commands:</p>
  <pre><code class="language-bash">node --version
npm --version</code></pre>
  <p>Both commands should print the installed version numbers, confirming that Node.js and npm are correctly installed on your system.</p>
</body>
</html>