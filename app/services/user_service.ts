export default class UsersService {
    async all(){
        return[
            {
                id:1,
                userName: 'Maryuri',
                ciudad: "Bolivar"
            },
            {
                id : 2,
                userName:'Rovinsom',
                ciudad:"Pereira"
            },
            {
                id : 2,
                userName:'RovinKevinsom',
                ciudad:"Pereira"
            }
        ]
    }
}