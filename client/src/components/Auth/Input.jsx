import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Input(props) {
  const {
    isHalf,
    name,
    label,
    handleChange,
    required,
    multiline,
    autoFocus,
    type,
    handleShowPassword,
    disabled,
  } = props;

  return (
    <Grid item xs={12} sm={isHalf ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={required}
        rows={3}
        multiline={multiline}
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        disabled={disabled}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
}
