import { Button, Input } from 'antd';

const Homepage = () => {
    return (
        <div>
            <header className="bg-black p-4">
                <div>
                    <h1 className="text-3xl text-green-500">XYZ COURSE!</h1>
                    <Input placeholder="Masukkan nama..." style={{ marginBottom: 10 }} />
                    <Button className=" hover:bg-blue-700 w-full">Klik Saya</Button>
                </div>
            </header>
        </div>
    );
};



export default Homepage;