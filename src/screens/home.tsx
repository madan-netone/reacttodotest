import { Alert, Button, FlatList, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleSheet } from "../styles/style";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useEffect, useState } from "react";



export default function Home() {

    const style = styleSheet;


    // const [addModal, setAddModal] = useState(true)
    const [formData, setFormData] = useState({
        title: ''

    })
    const [listData, setListData] = useState([]);



    useEffect(() => {


        console.log('updated', listData)

    }, [listData])

    const setInputData = (e: any) => {

        setFormData({ title: e })


    }


    const filterModal = () => {


    }

    const addNewItem = () => {





        if (formData.title !== '') {


            const currentDataList: any = listData;

            const newDataObj = { id: currentDataList?.length + 1, title: formData.title, status: 0 }

            currentDataList.push(newDataObj)

            // setListData([...listData, { 'id': currentDataList?.length + 1, 'title': formData.title, status: 0 }])

            setListData(currentDataList)





        }
        else {

            Alert.alert('Please enter title!')
        }


    }



    const deleteItem = (id: any) => {



        const currentDataList: any = listData;


        const updatedData = currentDataList.filter((item: any) => {
            return item.id !== id;
        })



        setListData(updatedData)

    }



    const taskCompleted = (id: any) => {


        const currentDataList: any = listData;

        const updatedData: any = [];
        currentDataList.forEach((item: any) => {

            if (item.id === id) {
                item['status'] = 1;

            }

            updatedData.push(item)
        })



        setListData(updatedData)

    }

    return (
        <>


            <View style={style.topBar}>

                <Text style={style.heading}>To Do List</Text>


                <TouchableOpacity onPress={() => filterModal}  >
                    <View style={style.filterBtn}>
                        <Text style={style.filterTitle}>Filter</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={style.container}>





                <View style={style.listBox}>

                    <FlatList

                        data={listData}
                        renderItem={(item) => {
                            return (<>
                                <View style={style.listItem}>

                                    <Text>
                                        {item?.item?.title}
                                    </Text>

                                    <TouchableOpacity onPress={() => deleteItem(item?.item?.id)}>
                                        <Text style={{ color: 'red' }}>Delete</Text>
                                    </TouchableOpacity>

                                    {item?.item?.status === 1 && <Text style={{ color: 'green' }}>Completed</Text>}

                                    {item?.item?.status !== 1 && <TouchableOpacity onPress={() => taskCompleted(item?.item?.id)}>
                                        <Text style={{ color: 'blue' }}>Mark As Completed</Text>
                                    </TouchableOpacity>}
                                </View>

                            </>)
                        }}
                    />
                </View>



                <View style={style.bottomCard}>

                    <View style={style.inputBox}>
                        <Text style={{ color: 'green', fontSize: 16, marginBottom: 10 }}>
                            Item Title
                        </Text>


                        <TextInput

                            value={formData.title}
                            style={style.textInput} onChangeText={(e) => { setInputData(e) }} placeholder="Item Title" ></TextInput>

                        <TouchableOpacity style={style.footerBtn} onPress={addNewItem}  >


                            <Text style={style.addBtn}>Add New List</Text>

                        </TouchableOpacity>

                    </View>


                </View>


            </View>








        </>
    )
}