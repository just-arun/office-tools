<template>
  <div class="version-tree">
      <nav class="nav">
          <ul>
              <li v-for="(item, i) in navLink" :key="i">
                  <router-link :to="item.to">{{item.text}}</router-link>
              </li>
          </ul>
      </nav>
    <h1>App Version Flow</h1>
    <ul class="container">
        <li class="content" v-for="(item, i) in versionTree" :key="i">
            <div>
                <h2 v-html="item.version"></h2>
                <div class="date">16-8-2019</div>
                <div class="description">
                    changes: <b class="Scolor">{{ item.changes }}</b> <br>
                </div>
                <div>
                    <u><b>Description</b></u>
                    <p v-html="item.description"></p>
                </div>
                
                <div>
                    <u><b>Changes List</b></u>
                    <ul>
                        <li v-for="(itm, ind) in item.list" :key="ind" v-html="itm"></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        navLink: [
            { text: 'Home', to: '/' },
            { text: 'SDD', to: '/guide' },
            { text: 'Version Tree', to: '/versions.html' },
        ],
      versionTree: [
        {
          version: "<a href='/'>v.01</a>",
          changes: 0,
          description: `
                    this is the initial version so everything is new here
                    `
        },
        {
          version: "v.02",
          changes: 8,
            list: [
                "something changes",
                "some other thing changed"
            ],
          description: `
                    this is the initial version so everything is new here
                    `,
        },
        {
          version: "v.03",
          changes: 23,
            list: [
                "something changes",
                "some other thing changed"
            ],
          description: `
                    this is the initial version so everything is new here
                    `,
        },
        {
          version: "v.03",
          changes: 23,
            list: [
                "something changes",
                "some other thing changed"
            ],
          description: `
                    this is the initial version so everything is new here
                    `,
        },
        {
          version: "v.03",
          changes: 23,
            list: [
                "something changes",
                "some other thing changed"
            ],
          description: `
                    this is the initial version so everything is new here
                    `,
        },
        {
          version: "v.03",
          changes: 23,
            list: [
                "something changes",
                "some other thing changed"
            ],
          description: `
                    this is the initial version so everything is new here
                    `,
        },
      ]
    };
  }
};
</script>
<style>
* {
    transition: .4s;
}
.nav {
    position: relative;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: flex-end;
}
.nav ul {
    display: flex;
}
.nav ul li {
    list-style: none;
    margin: 0 10px;
}
.nav ul li a {
    color: #fff;
}
.nav ul li a:hover {
    color: rgb(255, 94, 0);
}
.router-link-exact-active.router-link-active {
    color: rgb(255, 94, 0);
    border-bottom: 2px solid rgb(255, 94, 0);
}
.version-tree{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container {
    max-width: 700px;
    min-width: 700px;
    position: relative;
    /* background: rgb(51, 41, 41); */
    padding: 0px;
}
.content {
    background: #000;
    padding: 10px;
    color: #fff;
    margin: 30px 0;
    position: relative;
    display: block;
    max-width: 300px;
    min-width: 300px;
}
.content:nth-last-of-type(odd)::before {
    position: absolute;
    content: '';
    right: -41px;
    padding: 10px;
    background: rgb(255, 0, 34);
    border-radius: 50%;
}
.content:nth-last-of-type(even)::before {
    position: absolute;
    content: '';
    left: -39px;
    padding: 10px;
    background: rgb(255, 0, 34);
    border-radius: 50%;
}
.container::before {
    position: absolute;
    content: '';
    left: 50%;
    top: 0px;
    height: 100%;
    border-left: 1.5px solid #000;
}
.date {
    position: absolute;
    padding: 3px 6px;
    border-radius: 4px;
    color: #fff;
    background: rgb(255, 94, 0);
}
.content:nth-last-of-type(even) .date {
    left: -145px;
    top: 0px;
}
.content:nth-last-of-type(odd) .date {
    right: -145px;
    top: 0px;
}
.content:nth-last-of-type(odd){
    position: relative;
    float: left;
    clear: both;
}
.content:nth-last-of-type(even){
    position: relative;
    float: right;
    clear: both;
}
.Scolor{
    color: rgb(255, 94, 0);
}
.content h2 {
    margin-top: 5px;
    color: rgb(255, 94, 0);
}
p {
    margin: 2px 0;
    padding: 5px 0;
    padding-top: 0;
}

</style>