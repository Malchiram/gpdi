import { Merriweather } from 'next/font/google'

export const merriweather = Merriweather(
    {
        weight : ["300" , "400", "700" , "900"],
        subsets : ["latin"],
        variable : "--font-merriweather"
    }
)