import { connect } from "mongoose";


async function ConnectData(url) {
    connect(url)
}

export default ConnectData