import { makeStyles } from "@material-ui/core/styles";

export const FormStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    marginTop: 15,
  },
}));
