class GlobalDataHolder {
    static INSTANCE = new GlobalDataHolder();
    globalData;

    static getInstance() {
        return GlobalDataHolder.INSTANCE;
    }

    GlobalDataHolder(){
        console.log("called")
    }
    getGlobalData() {
        return this.globalData;
    }

    setGlobalData(globalData) {
        this.globalData = globalData;
    }
}
const instance=GlobalDataHolder.getInstance()
module.exports = {  };
