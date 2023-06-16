package com.volvoreta.Backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BookingDao")
@ConfigurationFile(
        configurationFile = "dao/BookingDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class BookingDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "id";
    public static final String ID_USER = "id_user";
    public static final String ID_PRODUCT = "id_product";
    public static final String UNITS = "units";
    public static final String RESERVATION_DATE = "reservation_date";
    public static final String RESERVATION_STATE = "reservation_state";
    public static final String UNIT_PRICE = "unit_price";
    public static final String TOTAL_PRICE = "total_price";
    public static final String RESERVATION_DAYS = "reservation_days";
}
