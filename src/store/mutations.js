function changeCity (state, city){
    state.city = city;
    try{
        localStorage.setItem('city',city);
    } catch (e){console.log(e)}
}
export default {
    changeCity:changeCity
}
