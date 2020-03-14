<template>
    <div>
        <v-btn v-if="!user" :loading="busyFetch" large color="success" :href="Selldone.UserApi.getLoginUrl()" class="ma-2" depressed>Connect to selldone</v-btn>
        <div v-else class="user-box">


            <p>
            <v-avatar  size="22" >
                <img :src="Selldone.UserApi.getUserAvatarUrl(user.id)" style="padding: 2px" />
            </v-avatar>




                {{user.name}}</p>
            <small>{{user.email}}</small></div>
    </div>
</template>

<script>
    /* eslint-disable @typescript-eslint/camelcase */

    export default {
        name: "LoginButton",

        data: () => {
            return {
                busyFetch: false,
                user:null,
            }
        },

        created(){
            if(this.accessToken){
                this.getUserInfo();
            }
        },
        methods: {


            getUserInfo() {
                this.busyFetch=true;
                this.user=null;
                window.Selldone.UserApi.getUserInfo()
                    .then(({data}) => {
                        if(!data.error){
                            this.user=data;
                        }else{
                            console.error('data', data);
                        }


                    })
                    .catch( (error) =>{
                        console.error(error);

                    }).finally(()=>{
                    this.busyFetch=false;
                });
            },




        }

    }
</script>

<style scoped lang="scss">
.user-box{
    border: #aaa solid thin;
    border-radius: 4px;
    padding: 4px 12px;
    p{
        margin: 0;
    }
    small{
        display: block;
        text-align: right;
    }
}
</style>