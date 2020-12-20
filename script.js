let vm = new Vue({
    el: "#app",
    data:{
        textList: [],
        addText: "",
        count: 0,
        deleteList: []
    },
    filters:{
        isNull: function(value){
            if(value === "") return "No Title"
            else return value
        }
    },
    methods:{
        clearText: function(){
            this.addText = ""
        },
        addTextToList: function(){
            let obj = {}
            if(this.addText === "sleeping beauty") window.location.href = "https://hubttery.sakura.ne.jp/webapp/sleeping_beauty/index.html"
            if(this.addText === "" || this.addText === null) obj.contents = "No Title"
            else obj.contents = this.addText
            obj.keys = this.count++
            this.textList.push(obj)
            this.clearText()
        },
        changeText: function(i){
            this.textList[i].contents = this.addText
            this.clearText()
        },
        deleteText: function(i){
            this.textList.splice(i,1)
            for(let k = i;k < this.textList.length;k++){
                this.textList[k].keys--
            }
            this.count--
            this.clearText()
        }
    },
    computed:{
        buttonMessage: function(){
            let len = this.textList.length
            if(!len) return "新規"
            else return "追加"
        },
        headerMessage: function(){
            let len = this.textList.length
            if(!len) return "Made by Vue.js"
            else return len + "個追加しました"
        }
    }
})