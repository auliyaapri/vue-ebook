// Impor fungsi defineStore dari library Pinia
import { defineStore } from "pinia"
// Impor axios untuk melakukan request HTTP
import axios from "axios"

// Ekspor fungsi useUserStore yang mendefinisikan store
export const useUserStore = defineStore({
    // ID store, digunakan oleh Pinia untuk mengidentifikasi store ini
    id: "user",
    // State awal store, dalam hal ini hanya ada satu properti: user
    state: () => ({
        // Properti user diinisialisasi dengan nilai false
        user: false
    }),
    // Getters adalah fungsi yang mengambil state dan mengembalikan beberapa nilai yang dihitung dari state
    getters: {
        // Getter isLoggedIn mengembalikan true jika user bukan false
        isLoggedIn: (state) => state.user !== false,
        // Getter getUser mengembalikan nilai dari user
        getUser: (state) => state.user
    },
    // Actions adalah metode yang dapat memanipulasi state
    actions: {
        // Action fetchUser adalah fungsi async yang mengambil data user dari server
        async fetchUser() {
            try {
                // Melakukan GET request ke endpoint API user
                const { data } = await axios.get('https://www.apriwiguna.my.id/api/user', {
                    headers: {
                        // Mengatur header Authorization dengan token yang disimpan di localStorage
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
                    }
                })
                // Jika request berhasil, simpan data user ke state
                this.user = data
            } catch (error) {
                // Jika terjadi error, atur user ke false
                this.user = false
            }
        }
    }
})
