import styles from "../styles";

import { Text, View,ScrollView } from "react-native";

const index = () => {
 const service = [
  { name: "Ayesha Khan", role: "Manager", age: 35, serviceLeft: 0.25 },
  { name: "Bilal Ahmed", role: "Engineer", age: 29, serviceLeft: 0.60 },
  { name: "Fatima Noor", role: "HR", age: 42, serviceLeft: 0.10 },
  { name: "Usman Raza", role: "Engineer", age: 31, serviceLeft: 0.50 },
  { name: "Hira Sohail", role: "Manager", age: 40, serviceLeft: 0.20 },
  { name: "Ali Shah", role: "Technician", age: 27, serviceLeft: 0.75 },
  { name: "Sana Mir", role: "HR", age: 34, serviceLeft: 0.30 },
  { name: "Zain Tariq", role: "Engineer", age: 28, serviceLeft: 0.65 },
  { name: "Noor Jahan", role: "Manager", age: 36, serviceLeft: 0.40 },
  { name: "Hamza Farooq", role: "Technician", age: 32, serviceLeft: 0.55 },
  { name: "Iqra Naseem", role: "HR", age: 38, serviceLeft: 0.15 },
  { name: "Taha Saeed", role: "Engineer", age: 26, serviceLeft: 0.80 },
  { name: "Laiba Rizvi", role: "Technician", age: 30, serviceLeft: 0.45 },
  { name: "Kashan Javed", role: "Manager", age: 43, serviceLeft: 0.18 },
  { name: "Mehwish Ali", role: "Engineer", age: 33, serviceLeft: 0.70 },
  { name: "Fahad Qureshi", role: "HR", age: '007', serviceLeft: 0.55 },
  { name: "Amber Bano", role: "Technician", age: 37, serviceLeft: 0.35 },
  { name: "Rehan Khan", role: "Engineer", age: 39, serviceLeft: 0.22 },
  { name: "Maham Tariq", role: "HR", age: 31, serviceLeft: 0.50 },
  { name: "Zohaib Iqbal", role: "Manager", age: 45, serviceLeft: 0.12 },
  { name: "Anum Sheikh", role: "Engineer", age: 28, serviceLeft: 0.68 },
  { name: "Rizwan Aslam", role: "Technician", age: 36, serviceLeft: 0.26 },
  { name: "Zoya Fatima", role: "HR", age: 103, serviceLeft: 0.48 },
  { name: "Talha Hashmi", role: "Engineer", age: 105, serviceLeft: 0.33 },
  { name: "Nida Jamil", role: "Manager", age: 100, serviceLeft: 0.17 },
];

  return (
    <ScrollView>
    <View style={styles.table}>
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText]}>Name</Text>
        <Text style={[styles.cell, styles.headerText]}>Role</Text>
        <Text style={[styles.cell, styles.headerText]}>Age</Text>
              <Text style={[styles.cell, styles.headerText]}>ServiceLeft</Text>

      </View>

      {service.map((item,index)=>(
<View key={index} style={styles.row}> 
  <Text style={styles.cell}>{item.name}</Text>
    <Text style={styles.cell}>{item.role}</Text>
  <Text style={styles.cell}>{item.age}</Text>
  <Text style={styles.cell}>{item.serviceLeft}</Text>

</View>

      ))}
    </View>
    </ScrollView>
  );
};

export default index;
