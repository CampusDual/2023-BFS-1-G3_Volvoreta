package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.db.SQLStatementBuilder;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IBookingService;
import com.volvoreta.Backend.model.core.dao.BookingDao;
import com.volvoreta.Backend.model.core.dao.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Lazy
@Service("BookingService")
public class BookingService implements IBookingService {
    @Autowired
    private BookingDao bookingDao;
    @Autowired
    private ProductDao productDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    private Integer years;

    public Integer getYears() {
        return years;
    }

    public void setYears(Integer years) {
        this.years = years;
    }

    @Override
    public EntityResult bookingQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }
    @Override
    public EntityResult sellBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
       return this.daoHelper.query(bookingDao, isYears(keyMap), attrList, "sellBookingQuery");
    }

    @Override
    public EntityResult locationsBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add("name_location");
        EntityResult eRResult = this.daoHelper.query(bookingDao, isYears(keyMap), attrList, "locationsBookingQuery");
        eRResult.put("name_location_units", CustomColumn(eRResult, "name_location", ". U:"));
        return eRResult;
    }

    @Override
    public EntityResult stockBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(bookingDao, isYears(keyMap), attrList, "stockBookingQuery");
    }

    @Override
    public EntityResult usersBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(bookingDao, isYears(keyMap), attrList, "usersBookingQuery");
   }
    @Override
    public EntityResult userslimitBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
        if(getYears() != null){
            keyMap.put("year_", getYears());
            setYears((null));
        }
        attrList.add("name");
        EntityResult eRResult = this.daoHelper.paginationQuery(bookingDao, keyMap, attrList, 7,1,new ArrayList<>(),"usersBookingQuery");
        eRResult.put("name_user", CustomColumn(eRResult, "name", ". U:"));
        return eRResult;
    }
    private List<String> CustomColumn(EntityResult eRResult, String nameColumn, String sms){
        List<String> list = new ArrayList<>();
        for(int i =0; i < eRResult.calculateRecordNumber(); i++){
            String name_user = (String) eRResult.getRecordValues(i).get(nameColumn) + sms;
            list.add(name_user);

        }
        return list;
    }
    @Override
    public void yearBookingQuery(Map<String, Object> keyMap, List<String> attrList) {
        if(keyMap.containsKey("year_")){
            setYears((Integer) keyMap.get("year_"));
        }

    }

    private Map<String, Object> isYears(Map<String, Object> keyMap){
        if(this.years != null){
            keyMap.put("year_", getYears());
            setYears(null);
        }
        return keyMap;
    }
    @Override
    public EntityResult gBookingQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }


    @Override
    public EntityResult reserveStockQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList, "reserveStockQuery");
    }
    @Override
    public EntityResult myBookingQuery(Map<String, Object> keyMap, List<?> attrList) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        keyMap.put("id_user", auth.getName());
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }

    //@Secured({ PermissionsProviderSecured.SECURED })
    @Override
    public EntityResult bookingInsert(Map<String, Object> attrMap) {
        Calendar endDate = Calendar.getInstance();
        endDate.setTimeInMillis((long) attrMap.get("end_date"));
//        Calendar endDate = Calendar.getInstance();
//        endDate.add(Calendar.DAY_OF_YEAR, 15);
        Timestamp timestamp = new Timestamp(endDate.getTime().getTime());
        attrMap.put("end_date", timestamp);
        return this.daoHelper.insert(bookingDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        if (attrMap.get("reservation_state").equals(2)){
            Timestamp timestamp = new Timestamp(Calendar.getInstance().getTime().getTime());
            attrMap.put("collection_completed", timestamp);

            EntityResult entityResult = this.daoHelper.query(bookingDao, keyMap, new ArrayList<String>(Arrays.asList("id_product")));
            if(otherQuerys(entityResult) != null){
                return entityResult;
            }

            Integer id_product = (Integer) entityResult.getRecordValues(0).get("id_product");
            Map<String, Object> keyMapProduct = Collections.singletonMap("id", id_product);
            Map<String, Object> productMap = new HashMap<>();
            productMap.putAll(this.activeBookingUpdate(productMap, keyMapProduct));

            EntityResult eProductActive = daoHelper.update(productDao, productMap, keyMapProduct);
        }
        return this.daoHelper.update(bookingDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult myBookingUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookingDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult gBookingUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        if (attrMap.get("reservation_state").equals(3)){
            //Sacar datos producto
            List<String> attrListBooking = new ArrayList<String>(Arrays.asList("id_product", "units"));
            EntityResult eRProductUnits = daoHelper.query(bookingDao, keyMap, attrListBooking);
            if(otherQuerys(eRProductUnits) != null){
                return eRProductUnits;
            }

            Integer id_product = (Integer) eRProductUnits.getRecordValues(0).get("id_product");
            Integer units = (Integer) eRProductUnits.getRecordValues(0).get("units");
            Map<String, Object> keyMapStock = Collections.singletonMap("id", id_product);
            List<String> stockList = new ArrayList<>(Arrays.asList("stock"));

            EntityResult eRProductStock = daoHelper.query(productDao, keyMapStock, stockList);
            if(otherQuerys(eRProductStock) != null){
                return eRProductStock;
            }

            Integer stock = (Integer) eRProductStock.getRecordValues(0).get("stock");
            Integer stockUpdated = stock - units;
            Map attrProduct = new HashMap<String, Object>();
            attrProduct.put("stock", stockUpdated);
            if(stockUpdated == 0){
                attrProduct.put("active", false);
            }
            daoHelper.update(productDao, attrProduct, keyMapStock);

            //Estampar la fecha en bookings
            Timestamp timestamp = new Timestamp(Calendar.getInstance().getTime().getTime());
            attrMap.put("collection_completed", timestamp);
        } else if (attrMap.get("reservation_state").equals(2)){
            Timestamp timestamp = new Timestamp(Calendar.getInstance().getTime().getTime());
            attrMap.put("collection_completed", timestamp);
            //this.activeBookingUpdate(attrMap, keyMap);
        }
        return this.daoHelper.update(bookingDao, attrMap, keyMap);
    }

    private Map<String, Object> activeBookingUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        List<String> stateList = new ArrayList<>(Arrays.asList("state"));

        EntityResult eRProductState = daoHelper.query(productDao, keyMap, stateList);
        if(otherQuerys(eRProductState) != null){
            return eRProductState.getRecordValues(0);
        }

        Integer state= (Integer) eRProductState.getRecordValues(0).get("state");

        if(state != 4){
            attrMap.put("active", true);
        }
        return attrMap;
    }


    private EntityResult otherQuerys(EntityResult entityResult){
        if(entityResult.isWrong()){
            return entityResult;
        }
        if(entityResult.isEmpty()){
            EntityResult notFoundERPS = new EntityResultMapImpl();
            notFoundERPS.setCode(EntityResult.OPERATION_WRONG);
            notFoundERPS.setMessage("Product not found");
            return notFoundERPS;
        }
        return null;
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookingDao, keyMap);
    }


}
