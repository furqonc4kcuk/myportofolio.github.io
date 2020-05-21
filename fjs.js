html,
body {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
}
.header {
  background-color: #eee;
  min-height: 50px;
  text-align: center;
}
.logo img {
  width: 100%;
  margin: 0 auto;
}
.imgprofile {
  padding: 16px;
}
.imgprofile img {
  float: left;
  border-radius: 50%;
  width: 250px;
  height: auto;
  padding: 10px 30px;
}
.banner {
  background-image: url("./baner.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.menu ul {
  margin: 0;
  padding: 10px 0;
}
.menu ul li {
  display: inline-block;
  position: relative;
}
.menu ul li a {
  padding: 10px 20px;
  text-decoration: none;
}
.content-wrapper {
  display: flex;
  min-height: 500px;
}
.sidebar {
  background-color: rgb(194, 190, 190);
  float: left;

  width: 30vw;
  overflow-x: hidden;
  text-align: center;
}
.content {
  background-color: #ddd;
  float: right;
  min-height: 500px;
  overflow: auto;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.profil-container {
  padding: 32px;
}
.content_profil {
  background-color: #ddd;
  overflow: auto;
  text-align: left;
}
.footer {
  background-color: #ccc;
  padding: 16px;
  text-align: center;
  clear: both;
}
.thumbnail-container {
  padding: 16px;
}
.thumbnail {
  background-color: white;
  text-align: center;
  padding: 10px;
  width: 225px;
  margin: 10px;
  float: left;
  border-radius: 8px;
}
.thumbnail img {
  width: 100%;
}
ul.submenu {
  background-color: #eee;
  border: 1px solid #ccc;
  text-align: left;
  position: absolute;
  top: 20px;
  left: 0;
  display: none;
}
ul.submenu li {
  display: block;
}
ul.submenu li a {
  display: block;
  padding: 5px 10px;
}
.menu ul li:hover ul.submenu {
  display: block;
}

@media screen and (max-width: 450px) {
  .content-wrapper {
    flex-direction: column;
  }
  .sidebar {
    display: none;
  }
}

/*untuk layar device berukuran kecil*/
@media screen and (min-width: 450px) {
  .sidebar {
    display: none;
  }
  .logo img {
    width: 100%;
    margin: 0 auto;
  }
}
/*untuk layar device berukuran sedang*/
@media screen and (min-width: 768px) {
  .container {
    width: 100%;
    min-height: 100px;
  }
  .content-wrapper {
    flex-direction: row;
  }
  .logo img {
    width: 100%;
    margin: 0 auto;
  }
  .sidebar {
    display: none;
  }
  .content {
    background-color: #ddd;
    float: right;
    min-height: 200px;
    width: 100%;
    overflow: auto;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .thumbnail {
    background-color: white;
    text-align: center;
    padding: 5px;
    width: 200px;
    margin: 10px;
    float: center;
  }
}
/*untuk layar device berukuran besar*/
@media screen and (min-width: 1000px) {
  .container {
    width: 100%;
    min-height: 200px;
  }
  .logo img {
    width: 100%;
    margin: 0 auto;
  }
  .sidebar {
    display: block;
    background-color: rgb(194, 190, 190);
    float: left;
    min-height: 500px;
    width: 30vw;
    overflow-x: hidden;
    text-align: center;
  }
  .content {
    background-color: #ddd;
    float: right;
    min-height: 200px;
    overflow: auto;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}

.tightbox-overlay {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.tightbox-container {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 5px solid white;
  border-radius: 3px;
}

.tightbox-image {
  display: block;
}

.tightbox-button {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  height: 0;
  top: 50%;
  margin-top: -2em;
}

.tightbox-button-left {
  left: 2em;
  border-bottom: 2em solid transparent;
  border-top: 2em solid transparent;
  border-right: 4em solid rgba(255, 255, 255, 0.5);
}

.tightbox-button-right {
  right: 2em;
  border-bottom: 2em solid transparent;
  border-top: 2em solid transparent;
  border-left: 4em solid rgba(255, 255, 255, 0.5);
}

/* unvisited link */
a:link {
  color: blue;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
a:active {
  color: yellow;
}

/* helper */
.clear--both {
  content: "";
  clear: both;
}
