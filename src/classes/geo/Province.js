import _Region from "./_Region";
import store from '@/store/store'
import Path from "./Path";

class Province extends _Region{
    constructor({
        province_code = '',
        title = '',
        paths = [],
        results = null
    }) {
        super();
        this.id = (store.state.provinces.all.length + 1);
        this.module = 'provinces';
        this.regionType = 'province';
        this.province_code = province_code;
        this.title = title;
        this.paths = paths.map(path => new Path(path));
        this.results = results;
        this.country_id = 1;
    }
}

export default Province;