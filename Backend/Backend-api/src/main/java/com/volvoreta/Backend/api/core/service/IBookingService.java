package com.volvoreta.Backend.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IBookingService {

    public EntityResult bookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult sellBookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult locationsBookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult stockBookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult usersBookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult gBookingQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult myBookingQuery(Map<String, Object> keyMap, List<?> attrList);
    public EntityResult reserveStockQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult bookingInsert(Map<String, Object> attrMap);
    public EntityResult bookingUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    public EntityResult myBookingUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    public EntityResult gBookingUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    public EntityResult bookingDelete(Map<?, ?> keyMap);

}
