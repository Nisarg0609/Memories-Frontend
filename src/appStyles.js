import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    container:{
        [theme.breakpoints.between('0','600')]:{
            boxSizing:'border-box',
            padding:'0',
            margin:'0',
        }
    }
}))

