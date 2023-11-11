import React from "react";
import './SubHeader.css' 
import { Avatar, Chip, Grid } from "@mui/material";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import Button from "../../compenentes-compartilhados/Button/Button";

declare interface SubHeaderProps {

    hidden?: boolean

}

function SubHeader(props: SubHeaderProps) {
    return <div className="AppSubHeader" hidden={ props.hidden }>
            <Conteudo>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="Ambiente">
                            <p>Ambiente de <b>desenvolvimento</b></p>
                        </div>
                    </Grid> 
                    <Grid item xs={5}>
                        <div className="Avatar">
                            <Chip avatar={<Avatar sx={{ background: 'white' }}>G</Avatar>} label="Yasmin Soares" />
                        </div> 
                        </Grid>
                        <Grid item xs={2} sm={1}> 
                            <div className="BotaoDeSair">
                            <Button value="Sair" color="danger" />
                            </div>
                        </Grid>
                </Grid>
            </Conteudo>
        </div>
}

export default SubHeader