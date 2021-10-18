import mongoose from 'mongoose';

const URI = 'mongodb+srv://hacongthanh:thanhka3@thanhha99.yiljq.mongodb.net/ShoeShare?retryWrites=true&w=majority';

const connect = async () => {
    await mongoose.connect(URI)
        .then(() => console.log("Connect database successfully"))
        .catch((err) => console.log("Connect database fail"));
}

export default connect;